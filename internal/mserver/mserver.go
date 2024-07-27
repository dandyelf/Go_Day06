package mserver

import (
	"io"
	"leftrana/superhero/pkg/hwriter"
	"leftrana/superhero/types"
	"log"
	"net/http"
	"net/url"
)

type Store interface {
	// returns a list of items, a total number of hits and (or) an error in case of one
	GetPosts(limit int, offset int) ([]types.Post, int, error)
	AddPost(post *types.Post) error
}

type mserver struct {
	adminUser types.Admin
	store     Store
}

// https://github.com/rus-sharafiev/go-rest-common/blob/main/spa/handler.go

func (s *mserver) ServStart() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("static/"))
	mux.Handle("/static/", http.StripPrefix("/static/", fs))
	mux.HandleFunc("/admin/", s.adminHandler)
	mux.HandleFunc("/addpost/", s.addPostHandler)
	mux.HandleFunc("/", s.htmlHandler)
	log.Fatal(http.ListenAndServe(":8888", mux))
}

func NewHttpServ(st Store, admin types.Admin) *mserver {
	s := new(mserver)
	s.store = st
	s.adminUser = admin
	return s
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
	passoword := query.Get("password")
	log.Printf("user want: %v, password want: %v", s.adminUser.Login, s.adminUser.Password)
	log.Printf("user have: %v, password have: %v", user, passoword)
	//   TODO
	// if user != s.adminUser.Login || passoword != s.adminUser.Password {
	// 	w.Write([]byte("unauthorized"))
	// 	return
	// }
	hwriter.AddPostPage(w, r)
	p := types.Post{Author: "I'm", Title: "Brutal I'm", Content: "I'm the best of the best, of the best, of the best."}
	s.createPost(&p)
}

func (s *mserver) createPost(post *types.Post) error {
	var err error
	if post != nil {
		err = s.store.AddPost(post)
	}
	return err
}
