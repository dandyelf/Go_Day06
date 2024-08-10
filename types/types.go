package types

import "time"

type Config struct {
	Server Server `json:"server"`
	Http   Http   `json:"http"`
	Posts  []Post `json:"posts"`
}

type Server struct {
	Dsn  string `json:"dsn"`
	Drop bool   `json:"drop"`
}

type Http struct {
	Port     string `json:"port"`
	Login    string `json:"login"`
	Password string `json:"password"`
}

/*
	CREATE TABLE posts (
	   title VARCHAR(255) NOT NULL,
	   content TEXT NOT NULL,
	   author VARCHAR(255) NOT NULL,

	   published_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

INSERT INTO posts (title, content, author, published_at)
VALUES
('Post 1', 'Content for Post 1', 'Author 1', '2022-01-01 12:00:00'),
('Post 2', 'Content for Post 2', 'Author 2', '2022-01-02 12:00:00'),
('Post 3', 'Content for Post 3', 'Author 3', '2022-01-03 12:00:00');
);
*/

type Post struct {
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Author      string    `json:"author"`
	PublishedAt time.Time `json:"published_at"`
}

type PostWithNum struct {
	Number      int
	Title       string
	Content     string
	Author      string
	PublishedAt string
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
