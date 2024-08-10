package hwriter

import (
	"leftrana/superhero/internal/pages"
	"leftrana/superhero/types"
	"log"
	"net/http"
	"strconv"
	"strings"
	"text/template"
)

type Store interface {
	GetPosts(limit int, offset int) ([]types.Post, int, error)
}

const (
	contentlength = 10
)

func ReadPostPageWriter(w http.ResponseWriter, r *http.Request, store Store) {
	const perPage = 3
	page := 3
	if queryPage := r.URL.Query().Get("post"); len(queryPage) != 0 {
		if pageNum, err := strconv.Atoi(queryPage); err == nil {
			page = pageNum
		} else {
			w.Write([]byte("Page should be a number!"))
			return
		}
	}
	post, _, _ := store.GetPosts(1, page)

	data := struct {
		Title       string
		Content     string
		PublishedAt string
		CurrentPage int
	}{
		Title:       post[0].Title,
		Content:     post[0].Content,
		PublishedAt: post[0].PublishedAt.Format("Jan 2 2006 15:04:05"),
		CurrentPage: (page + perPage) / perPage,
	}

	tmpl, err := template.New("postPage").Parse(pages.PostTmpl)
	if err != nil {
		log.Fatal(err)
	}

	if err := tmpl.Execute(w, data); err != nil {
		log.Fatal(err)
	}
}

func PostsPageWriter(w http.ResponseWriter, r *http.Request, store Store) {
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

	lastPage := total/perPage + 1
	var listWitNum []types.PostWithNum
	for n, listItem := range list {
		listWitNum = append(listWitNum, types.PostWithNum{
			Number:      n + (page-1)*perPage,
			Title:       listItem.Title,
			Content:     trimString(listItem.Content, contentlength),
			PublishedAt: listItem.PublishedAt.Format("Jan 2 2006 15:04:05"),
		})
	}

	data := struct {
		Total         int
		Next          int
		Prev          int
		PerPage       int
		CurrentPage   int
		LastPage      int
		List          []types.PostWithNum
		NextExists    bool
		PrevExists    bool
		NextNotExists bool
		PrevNotExists bool
		FirstItemNum  int
	}{
		Total:         total,
		Next:          page + 1,
		Prev:          page - 1,
		PerPage:       perPage,
		CurrentPage:   page,
		LastPage:      lastPage,
		List:          listWitNum,
		NextExists:    lastPage > page,
		PrevExists:    page-1 > 0,
		NextNotExists: !(lastPage > page),
		PrevNotExists: !(page-1 > 0),
		FirstItemNum:  page*perPage - 2,
	}

	tmpl, err := template.New("mainPage").Parse(pages.MainTmpl)
	if err != nil {
		log.Fatal(err)
	}

	if err := tmpl.Execute(w, data); err != nil {
		log.Fatal(err)
	}
}

func AdminPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.New("loginPage").Parse(pages.AuthTmpl)
	if err != nil {
		log.Fatal(err)
	}

	if err := tmpl.Execute(w, nil); err != nil {
		log.Fatal(err)
	}
}

func trimString(str string, n int) string {
	words := strings.Fields(str)
	if len(words) > n {
		words = words[:n]
	}
	return strings.Join(words, " ") + "..."
}

func AddPostPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.New("newPostPage").Parse(pages.NewPostTmplt)
	if err != nil {
		log.Fatal(err)
	}

	if err := tmpl.Execute(w, nil); err != nil {
		log.Fatal(err)
	}
}

func PushPostPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.New("postAddedPage").Parse(pages.PostAddedTmpl)
	if err != nil {
		log.Fatal(err)
	}

	if err := tmpl.Execute(w, nil); err != nil {
		log.Fatal(err)
	}
}
