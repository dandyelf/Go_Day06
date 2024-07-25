package mserver

import (
	"leftrana/superhero/pkg/hwriter"
	"leftrana/superhero/pkg/jkey"
	"leftrana/superhero/types"
	"log"
	"net/http"
	"time"
)

type Store interface {
	// returns a list of items, a total number of hits and (or) an error in case of one
	GetPosts(limit int, offset int) ([]types.Post, int, error)
	AddPost(post *types.Post) error
	CheckAdminUser(User string, password string) bool
}

var store Store

func HttpServ(st Store) {
	store = st
	mux := http.NewServeMux()
	mux.HandleFunc("/", htmlHandler)
	mux.HandleFunc("/admin/", jToken)
	mux.HandleFunc("/addpost/", jkey.CheckAuth(dbHandler))
	log.Fatal(http.ListenAndServe(":8888", mux))
}

func htmlHandler(w http.ResponseWriter, r *http.Request) {
	hwriter.HWriter(w, r, store)
}

func jToken(w http.ResponseWriter, r *http.Request) {
	jkey.JwtCreate(w, r)
}

func dbHandler(w http.ResponseWriter, r *http.Request) {
	err := createPost(&types.Post{Author: "I'm", Content: "I'm GROOD or not", Title: "I'm not", PublishedAt: time.Now()})
	if err != nil {
		log.Println(err.Error())
	}
	hwriter.HWriter(w, r, store)
}

func createPost(post *types.Post) error {
	var err error
	if post != nil {
		err = store.AddPost(post)
	}
	return err
}
