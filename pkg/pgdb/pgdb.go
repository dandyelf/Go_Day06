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

var db *bun.DB

type PostStore struct {
	// Дополнительные поля, если необходимо
}

type Entry struct {
	bun.BaseModel `bun:"table:anomalies"`
	ID            int64     `bun:"id,pk,autoincrement"`
	Title         string    `json:"title"`
	Content       string    `json:"content"`
	Author        string    `json:"author"`
	PublishedAt   time.Time `json:"published_at"`
}

func (ps *PostStore) GetPosts(limit int, offset int) ([]types.Post, int, error) {
	// from := offset*limit - limit + 1
	list := []types.Post{{Author: "I'm", Content: "Go go gadjet", PublishedAt: time.Now()},
		{Author: "I'm", Content: "Super hero RULEZZZZ", PublishedAt: time.Now()},
		{Author: "I'm", Content: "I'm so sad, all stupid things, tsh...", PublishedAt: time.Now()},
	}

	return list, 3, nil
}

func (ps *PostStore) CheckAdminUser(User string, password string) bool {
	return true
}

func (ps *PostStore) AddPost(post types.Post) error {

	return AddEntry(post)
}

// conf PgConf
func DbConnect(dsn string) error {
	if dsn == "" {
		dsn = "postgres://postgres:123@localhost:5432/postgres?sslmode=disable"
	}
	sqldb := sql.OpenDB(pgdriver.NewConnector(pgdriver.WithDSN(dsn)))
	db = bun.NewDB(sqldb, pgdialect.New())
	err := db.Ping()
	if err != nil {
		return fmt.Errorf("failed to connect to database: %w", err)
	}
	return nil
}

func AddNewTable(logger *slog.Logger, drop bool) error {
	err := db.Ping()
	if err != nil {
		return fmt.Errorf("database ping failed: %w", err)
	}
	logger.Info("Connected to database")

	if drop {
		err = db.ResetModel(context.Background(), (*Entry)(nil))
		if err != nil {

			return fmt.Errorf("failed to create table: %w", err)
		}
		logger.Info("Table droped")

		return nil
	}
	_, err = db.NewCreateTable().
		Model((*Entry)(nil)).
		IfNotExists().
		Exec(context.Background())
	if err != nil {
		return fmt.Errorf("failed to create table: %w", err)
	}
	log.Println("Table ready to use")
	return nil
}

func AddEntry(data types.Post) error {
	if db == nil {
		return fmt.Errorf("database connection is not initialized")
	}
	entry := &Entry{
		Title:       data.Title,
		Content:     data.Content,
		Author:      data.Author,
		PublishedAt: data.PublishedAt,
	}
	res, err := db.NewInsert().Model(entry).Exec(context.Background())
	if err != nil {
		return fmt.Errorf("failed to insert entry: %w", err)
	}
	log.Println("Entry inserted", res)
	return nil
}
