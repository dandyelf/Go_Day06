package mserver

import (
	"io"
	"leftrana/superhero/pkg/hwriter"
	"leftrana/superhero/pkg/jwtkey"
	"leftrana/superhero/types"
	"log"
	"net/http"
	"net/url"
	"time"

	"github.com/russross/blackfriday"
)

type Store interface {
	// returns a list of items, a total number of hits and (or) an error in case of one
	GetPosts(limit int, offset int) ([]types.Post, int, error)
	AddPost(post *types.Post) error
}

type mserver struct {
	adminUser   types.Admin
	store       Store
	rateLimiter chan struct{}
}

func (s *mserver) ServStart() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("static/"))
	mux.Handle("/static/", s.limitRateH(http.StripPrefix("/static/", fs)))
	mux.HandleFunc("/admin/", s.limitRate(s.adminHandler))
	mux.HandleFunc("/addpost", s.limitRate(s.addPostHandler))
	mux.HandleFunc("/pushpost", s.limitRate(jwtkey.CheckAuth(s.pushPostHandler)))
	mux.HandleFunc("/readpost/", s.limitRate(s.readPostHandler))
	mux.HandleFunc("/", s.limitRate(s.htmlHandler))
	log.Fatal(http.ListenAndServe(":8888", mux))
}

func (s *mserver) limitRate(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		select {
		case <-s.rateLimiter:
			next(w, r)
		default:
			http.Error(w, "Too Many Requests", http.StatusTooManyRequests)
		}
	}
}

func (s *mserver) limitRateH(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		select {
		case <-s.rateLimiter:
			next.ServeHTTP(w, r)
		default:
			http.Error(w, "Too Many Requests", http.StatusTooManyRequests)
		}
	})
}

func (s *mserver) readPostHandler(w http.ResponseWriter, r *http.Request) {
	hwriter.ReadPostPageWriter(w, r, s.store)
}

func NewHttpServ(st Store, admin types.Admin) *mserver {
	s := new(mserver)
	limiter := make(chan struct{}, 100)

	// Запускаем горутину, которая будет сбрасывать лимитер каждую секунду
	go func() {
		for {
			time.Sleep(1 * time.Second)
			for i := 0; i < 100; i++ {
				limiter <- struct{}{} // Заполняем канал
			}
		}
	}()
	s.rateLimiter = limiter
	s.store = st
	s.adminUser = admin
	return s
}

func (s *mserver) pushPostHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		log.Printf("Error reading body: %v", err)
		http.Error(w, "can't read body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()
	query, err := url.ParseQuery(string(body))
	if err != nil {
		log.Println("err parse queyr", err)
	}

	title := query.Get("title")
	content := query.Get("content")
	c := markdownToHtml(content)
	var post types.Post
	post.Author = "I'm"
	post.PublishedAt = time.Now()
	post.Title = title
	post.Content = c
	hwriter.PushPostPage(w, r)
	s.createPost(&post)
}

func (s *mserver) htmlHandler(w http.ResponseWriter, r *http.Request) {
	hwriter.PostsPageWriter(w, r, s.store)
}

func (s *mserver) adminHandler(w http.ResponseWriter, r *http.Request) {
	hwriter.AdminPage(w, r)
}

func (s *mserver) addPostHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		log.Printf("Error reading body: %v", err)
		http.Error(w, "can't read body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()
	query, err := url.ParseQuery(string(body))
	if err != nil {
		log.Println("err parse queyr", err)
	}

	user := query.Get("user")
	password := query.Get("password")
	log.Printf("user want: %v, password want: %v", s.adminUser.Login, s.adminUser.Password)
	log.Printf("user have: %v, password have: %v", user, password)
	//   TODO
	if user == s.adminUser.Login || password == s.adminUser.Password {
		jwtkey.JwtCreate(w, r)
		hwriter.AddPostPage(w, r)
		return
	}
	jwtkey.CheckAuth(hwriter.AddPostPage)
	hwriter.AddPostPage(w, r)
}

func (s *mserver) createPost(post *types.Post) error {
	var err error
	if post != nil {
		err = s.store.AddPost(post)
	}
	return err
}

func markdownToHtml(markdownText string) string {
	html := blackfriday.MarkdownCommon([]byte(markdownText))
	return string(html)
}
