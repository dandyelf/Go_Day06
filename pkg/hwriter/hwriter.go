package hwriter

import (
	"leftrana/superhero/types"
	"log"
	"net/http"
	"strconv"
	"strings"
)

type Store interface {
	// returns a list of items, a total number of hits and (or) an error in case of one
	GetPosts(limit int, offset int) ([]types.Post, int, error)
}

const (
	contentlength = 10
)

func ReadPostPageWriter(w http.ResponseWriter, r *http.Request, store Store) {
	page := 1
	if queryPage := r.URL.Query().Get("page"); len(queryPage) != 0 {
		if pageNum, err := strconv.Atoi(queryPage); err == nil {
			page = pageNum
		} else {
			w.Write([]byte("Page should be a number!"))
			return
		}
	}
	post, _, _ := store.GetPosts(page, 0)
	html := readPostPageCreate(1, post[0])
	w.Write([]byte(html))
}

func readPostPageCreate(currentPage int, post types.Post) string {
	var html strings.Builder

	html.WriteString(`
<!doctype html>
<html>
	<head>
		<script type="text/javascript" src="http://localhost:8888/static/web-components-bundle.min.js" async="async"></script>
		<meta charset="utf-8">
		<title>Hero blog</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	</head>

	<body>
		<style>
			html {
				font-family: "Roboto", sans-serif;
			}
		</style>
`)
	html.WriteString(`<img src="/static/amazing_logo.png" alt="wonderful logo">
`)
	html.WriteString(`	<ul><div><h4>` + post.Title + `</h4></div>`)
	html.WriteString(`	<li><div>` + post.Content + `... </div></li>`)
	html.WriteString(`	<li><div>` + post.PublishedAt.Local().String() + `</div></li></ul>`)
	html.WriteString(`	<form method="get" action="/?page=` + strconv.Itoa(currentPage) + `">
	<md-filled-button type="submit">Назад</md-filled-button>
	</form><div style="display: flex; gap: 12px; margin: 12px 0">`)

	html.WriteString(`</div>`)

	return html.String()
}

func PostsPageWriter(w http.ResponseWriter, r *http.Request, store Store) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	page := 1
	if queryPage := r.URL.Query().Get("page"); len(queryPage) != 0 {
		if pageNum, err := strconv.Atoi(queryPage); err == nil {
			page = pageNum
		} else {
			w.Write([]byte("Page should be a number!"))
			return
		}
	}
	perPage := 3
	if queryPerPage := r.URL.Query().Get("per-page"); len(queryPerPage) != 0 {
		if perPageNum, err := strconv.Atoi(queryPerPage); err == nil {
			perPage = perPageNum
		} else {
			w.Write([]byte("Page should be a number!"))
			return
		}
	}

	list, total, err := store.GetPosts(perPage, (page-1)*perPage)

	if err != nil {
		w.Write([]byte("400 Invalid page value: " + strconv.Itoa(page)))
		return
	}
	html := createHtml(total, page-1, page+1, perPage, page, list)

	w.Write([]byte(html))
}

func createHtml(total int, prev int, next int, perPage int, currentPage int, list []types.Post) string {
	var html strings.Builder

	html.WriteString(`
<!doctype html>
<html>
	<head>
		<script type="text/javascript" src="http://localhost:8888/static/web-components-bundle.min.js" async="async"></script>
		<meta charset="utf-8">
		<title>My blog</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	</head>

	<body>
		<style>
			html {
				font-family: "Roboto", sans-serif;
			}
		</style>
`)
	html.WriteString(`<img src="/static/amazing_logo.png" alt="wonderful logo">
`)
	html.WriteString(`<h4>Total: ` + strconv.Itoa(total) + `</h4><ul>`)

	for n, postList := range list {
		html.WriteString(`<li><a href="/readpost/?post=` + strconv.Itoa(n) + `">`)
		html.WriteString(`	<div><h4>` + postList.Title + `</h4></div>`)
		html.WriteString(`	<div>` + trimString(postList.Content, contentlength) + `... </div></a>`)
		html.WriteString(`	<div>` + postList.PublishedAt.Local().String() + `</div>`)
		html.WriteString(`</li>`)
	}
	lastPage := total/perPage + 1
	if total%perPage == 0 {
		lastPage = lastPage - 1
	}

	html.WriteString(`</ul><div style="display: flex; gap: 12px; margin: 12px 0">`)
	if prev > 0 {
		html.WriteString(`<a href="/?page=1"><md-text-button>First</md-text-button></a>`)
		html.WriteString(`<a href="/?page=` + strconv.Itoa(prev) + `"><md-text-button>Previous</md-text-button></a>`)
	}
	if lastPage > currentPage {
		html.WriteString(`<a href="/?page=` + strconv.Itoa(next) + `"><md-text-button>Next</md-text-button></a>`)
		html.WriteString(`<a href="/?page=` + strconv.Itoa(lastPage) + `"><md-text-button>Last</md-text-button></a>`)
	}
	html.WriteString(`</div>`)

	return html.String()
}

func AdminPage(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
	html := createAdmin()
	w.Write([]byte(html))
}

func trimString(str string, n int) string {
	words := strings.Fields(str)
	if len(words) > n {
		words = words[:n]
	}
	return strings.Join(words, " ")
}

func createAdmin() string {
	var html strings.Builder

	html.WriteString(`
<!doctype html>
<html>
	<head>
		<script type="text/javascript" src="http://localhost:8888/static/web-components-bundle.min.js" async="async"></script>
		<meta charset="utf-8">
		<title>My blog</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	</head>

	<body>
		<style>
			html {
				font-family: "Roboto", sans-serif;
			}
		</style>

		<form method="post" action="/addpost">
			<md-outlined-text-field label="Логин" name="user" required></md-outlined-text-field>
			<md-outlined-text-field label="Пароль" name="password" type="password" required></md-outlined-text-field>
			<md-filled-button type="submit">Войти</md-filled-button>
		<form>
	</body>
</html>	
`)
	return html.String()
}

func AddPostPage(w http.ResponseWriter, r *http.Request) {
	log.Println("post page printed")
	html := createAddPost()
	w.Write([]byte(html))
}

func createAddPost() string {
	var html strings.Builder

	html.WriteString(`
<!doctype html>
<html>
	<head>
		<script type="text/javascript" src="http://localhost:8888/static/web-components-bundle.min.js" async="async"></script>
		<meta charset="utf-8">
		<title>My blog</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	</head>

	<body>
		<style>
			html {
				font-family: "Roboto", sans-serif;
			}
		</style>

		<div>Пиши</div>
		<div>пост!</div>
		<form method="post" action="/pushpost">
			<md-outlined-text-field label="Название" name="title" required></md-outlined-text-field>
			<md-outlined-text-field label="Пост" name="content" type="textarea"></md-outlined-text-field>
			<md-filled-button type="submit">Опубликовать</md-filled-button>
		</form>
	</body>
</html>	
`)
	return html.String()
}

func PushPostPage(w http.ResponseWriter, r *http.Request) {
	html := createPushPost()
	w.Write([]byte(html))
}

func createPushPost() string {
	var html strings.Builder

	html.WriteString(`
<!doctype html>
<html>
	<head>
		<script type="text/javascript" src="http://localhost:8888/static/web-components-bundle.min.js" async="async"></script>
		<meta charset="utf-8">
		<title>My blog</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	</head>

	<body>
		<style>
			html {
				font-family: "Roboto", sans-serif;
			}
		</style>

		<div>Пост</div>
		<div>добавлен!</div>
		<form method="get" action="/addpost">
			<md-filled-button type="submit">Назад</md-filled-button>
		</form>
	</body>
</html>	
`)
	return html.String()
}
