package pgdb

import (
	// "bytes"
	"context"
	"database/sql"
	"log"

	// "encoding/json"
	"fmt"
	"leftrana/superhero/types"
	"time"

	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"
	"github.com/uptrace/bun/driver/pgdriver"
)

type postStore struct {
	db *bun.DB
}

type Entry struct {
	bun.BaseModel `bun:"table:myblog"`
	Title         string    `json:"title"`
	Content       string    `bun:"type:text" json:"content"`
	Author        string    `json:"author"`
	PublishedAt   time.Time `json:"published_at"`
}

func NewPostStore(connectStr types.Server) *postStore {
	store := new(postStore)
	err := store.DbConnect(connectStr.Dsn)
	if err != nil {
		log.Printf("failed to connect to database: %e", err)
		return nil
	}
	store.AddNewTable(connectStr.Drop)
	return store
}

func (ps *postStore) SelectPage(ctx context.Context, db *bun.DB, limit, offset int) ([]Entry, int, error) {
	var entries []Entry
	count, err := db.NewSelect().Model(&entries).Count(ctx)
	if err != nil {
		return nil, count, err
	}
	if err = ps.db.NewSelect().Model(&entries).Offset(offset).Limit(limit).Scan(ctx); err != nil {
		return nil, count, err
	}
	return entries, count, nil
}

func (ps *postStore) GetPosts(limit int, offset int) ([]types.Post, int, error) {
	list, count, err := ps.SelectPage(context.Background(), ps.db, limit, offset)
	if err != nil {
		log.Println(err)
		return nil, count, fmt.Errorf("fail get posts: %w", err)
	}
	posts := make([]types.Post, len(list))
	for i, v := range list {
		posts[i] = types.Post{
			Author:      v.Author,
			Title:       v.Title,
			Content:     v.Content,
			PublishedAt: v.PublishedAt,
		}
	}
	return posts, count, nil
}

func (ps *postStore) AddPost(post *types.Post) error {
	return ps.AddEntry(post)
}

func (ps *postStore) DbConnect(dsn string) error {
	if dsn == "" {
		log.Println("default dns")
		dsn = "postgres://postgres:123@localhost:5432/postgres?sslmode=disable"
	}
	sqldb := sql.OpenDB(pgdriver.NewConnector(pgdriver.WithDSN(dsn)))
	ps.db = bun.NewDB(sqldb, pgdialect.New())
	err := ps.db.Ping()
	if err != nil {
		return fmt.Errorf("failed to connect to database: %w", err)
	}
	return nil
}

func (ps *postStore) AddNewTable(drop bool) error {
	err := ps.db.Ping()
	if err != nil {
		return fmt.Errorf("database ping failed: %w", err)
	}
	log.Println("Connected to database")

	if drop {
		err = ps.db.ResetModel(context.Background(), (*Entry)(nil))
		if err != nil {

			return fmt.Errorf("failed to create table: %w", err)
		}
		log.Println("Table droped")

		return nil
	}
	_, err = ps.db.NewCreateTable().
		Model((*Entry)(nil)).
		IfNotExists().
		Exec(context.Background())
	if err != nil {
		return fmt.Errorf("failed to create table: %w", err)
	}
	log.Println("Table ready to use")
	return nil
}

func (ps *postStore) AddEntry(data *types.Post) error {
	if ps.db == nil {
		return fmt.Errorf("database connection is not initialized")
	}
	entry := &Entry{
		Title:       data.Title,
		Content:     data.Content,
		Author:      data.Author,
		PublishedAt: data.PublishedAt,
	}
	_, err := ps.db.NewInsert().Model(entry).Exec(context.Background())
	if err != nil {
		return fmt.Errorf("failed to insert entry: %w", err)
	}
	return nil
}
