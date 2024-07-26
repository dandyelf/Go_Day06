package hwriter

import (
	"leftrana/superhero/types"
	"net/http"
	"strconv"
	"strings"
)

type Store interface {
	// returns a list of items, a total number of hits and (or) an error in case of one
	GetPosts(limit int, offset int) ([]types.Post, int, error)
}

func HWriter(w http.ResponseWriter, r *http.Request, store Store) {
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

	list, total, err := store.GetPosts(perPage, page)

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
		<meta charset="utf-8">
		<title>Places</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
		<script type="text/javascript" src="https://demo.wow2print.com/assets/9d3acd35/js/web-components-bundle.min.js" async="async"></script>
	</head>

	<body>
		<style>
			html {
				font-family: "Roboto", sans-serif;
			}
		</style>
`)

	html.WriteString(`<h4>Total: ` + strconv.Itoa(total) + `</h4><ul>`)

	for _, restaurant := range list {
		html.WriteString(`<li>`)
		html.WriteString(`	<div>` + restaurant.Author + `</div>`)
		html.WriteString(`	<div>` + restaurant.Content + `</div>`)
		html.WriteString(`	<div>` + restaurant.PublishedAt.GoString() + `</div>`)
		html.WriteString(`</li>`)
	}

	lastPage := total / perPage

	html.WriteString(`<div style="display: flex; gap: 12px; margin: 12px 0">`)
	if prev > 0 {
		html.WriteString(`<a href="/?page=1"><md-text-button>First</md-text-button></a>`)
		html.WriteString(`<a href="/?page=` + strconv.Itoa(prev) + `"><md-text-button>Previous</md-text-button></a>`)
	}
	if lastPage > currentPage {
		html.WriteString(`<a href="/?page=` + strconv.Itoa(next) + `"><md-text-button>Next</md-text-button></a>`)
		html.WriteString(`<a href="/?page=` + strconv.Itoa(lastPage) + `"><md-text-button>Last</md-text-button></a>`)
	}
	html.WriteString(`</div>`)

	html.WriteString(`
		</ul>
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
