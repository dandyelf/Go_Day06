package types

import "time"

type SearchResult struct {
	Hits struct {
		Total struct {
			Value    int    `json:"value"`
			Relation string `json:"relation"`
		} `json:"total"`
		Hits []struct {
			ID     string `json:"_id"`
			Source Post   `json:"_source"`
		} `json:"hits"`
	} `json:"hits"`
}

/*
	CREATE TABLE posts (
	   id SERIAL PRIMARY KEY,
	   title VARCHAR(255) NOT NULL,
	   content TEXT NOT NULL,
	   author VARCHAR(255) NOT NULL,

published_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

	category VARCHAR(255),
	tags TEXT[]

);
*/
type Post struct {
	ID          int64     `json:"id"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Author      string    `json:"author"`
	PublishedAt time.Time `json:"published_at"`
}

type PageData struct {
	Name        string
	Total       int
	Prev        int
	Next        int
	PerPage     int
	CurrentPage int
	List        []Post
}
