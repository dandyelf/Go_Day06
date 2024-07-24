package pgdb

import (
	// "bytes"
	"context"
	"database/sql"
	"log"

	// "encoding/json"
	"fmt"
	"leftrana/superhero/types"
	"log/slog"
	"time"

	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"
	"github.com/uptrace/bun/driver/pgdriver"
)

type postStore struct {
	// Дополнительные поля, если необходимо
	db *bun.DB
}

func NewPostStore(connectStr string) *postStore {
	return &postStore{}
}

type Entry struct {
	bun.BaseModel `bun:"table:anomalies"`
	Title         string    `json:"title"`
	Content       string    `json:"content"`
	Author        string    `json:"author"`
	PublishedAt   time.Time `json:"published_at"`
}

func (ps *postStore) GetPosts(limit int, offset int) ([]types.Post, int, error) {
	// from := offset*limit - limit + 1
	list := []types.Post{{Author: "I'm", Content: "Go go gadjet", PublishedAt: time.Now()},
		{Author: "I'm", Content: "Super hero RULEZZZZ", PublishedAt: time.Now()},
		{Author: "I'm", Content: "I'm so sad, all stupid things, tsh...", PublishedAt: time.Now()},
	}

	return list, 3, nil
}

func (ps *postStore) CheckAdminUser(User string, password string) bool {
	return true
}

func (ps *postStore) AddPost(post types.Post) error {

	return ps.AddEntry(post)
}

// conf PgConf
func (ps *postStore) DbConnect(dsn string) error {
	if dsn == "" {
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

func (ps *postStore) AddNewTable(logger *slog.Logger, drop bool) error {
	err := ps.db.Ping()
	if err != nil {
		return fmt.Errorf("database ping failed: %w", err)
	}
	logger.Info("Connected to database")

	if drop {
		err = ps.db.ResetModel(context.Background(), (*Entry)(nil))
		if err != nil {

			return fmt.Errorf("failed to create table: %w", err)
		}
		logger.Info("Table droped")

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

func (ps *postStore) AddEntry(data types.Post) error {
	if ps.db == nil {
		return fmt.Errorf("database connection is not initialized")
	}
	entry := &Entry{
		Title:       data.Title,
		Content:     data.Content,
		Author:      data.Author,
		PublishedAt: data.PublishedAt,
	}
	res, err := ps.db.NewInsert().Model(entry).Exec(context.Background())
	if err != nil {
		return fmt.Errorf("failed to insert entry: %w", err)
	}
	log.Println("Entry inserted", res)
	return nil
}
