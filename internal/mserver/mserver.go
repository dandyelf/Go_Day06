package mserver

import (
	"context"
	"fmt"
	"io"
	"leftrana/superhero/pkg/hwriter"
	"leftrana/superhero/pkg/jwtkey"
	"leftrana/superhero/types"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/russross/blackfriday"
)

type Store interface {
	GetPosts(limit int, offset int) ([]types.Post, int, error)
	AddPost(post *types.Post) error
}

type mserver struct {
	httpOpt     types.Http
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
	srv := &http.Server{Addr: ":" + s.httpOpt.Port, Handler: mux}
	log.Println("##### press \"q\" + enter for exit #####")
	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("ListenAndServe: %v", err)
		}
		log.Println("Exit sever rutine...")
	}()

	// Канал для сигналов
	signalChan := make(chan os.Signal, 1)
	signal.Notify(signalChan, syscall.SIGINT, syscall.SIGTERM)
	done := make(chan struct{})
	go func() {
		var input string
		for {
			fmt.Scanln(&input)
			if input == "q" {
				log.Println("Shutting down server...")
				close(done)
				break
			}
		}
	}()
	select {
	case <-signalChan:
		log.Println("Received shutdown signal, shutting down server...")
	case <-done:
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("Server Shutdown: %v", err)
	}
	log.Println("Server exited gracefully")
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

func NewHttpServ(st Store, opt types.Http) *mserver {
	s := new(mserver)
	limiter := make(chan struct{}, 100)
	go func() {
		for {
			time.Sleep(1 * time.Second)
			for i := 0; i < 100; i++ {
				limiter <- struct{}{}
			}
		}
	}()
	s.rateLimiter = limiter
	s.store = st
	s.httpOpt = opt
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

	s.PushPostOnDb(&types.Post{Author: "I'm", Title: title, Content: content, PublishedAt: time.Now()})
	hwriter.PushPostPage(w, r)
}

func (s *mserver) PushPostOnDb(post *types.Post) {
	post.Content = markdownToHtml(post.Content)
	s.createPost(post)
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
	//   TODO
	if user == s.httpOpt.Login || password == s.httpOpt.Password {
		jwtkey.JwtCreate(w, r)
		hwriter.AddPostPage(w, r)
		return
	}
	log.Println("password incorrect try cookie")
	jwtkey.CheckAuth(hwriter.AddPostPage)(w, r)
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
