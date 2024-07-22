package mserver

import (
	"leftrana/superhero/pkg/hwriter"
	"leftrana/superhero/pkg/jkey"
	"leftrana/superhero/types"
	"log"
	"net/http"
)

type Store interface {
	// returns a list of items, a total number of hits and (or) an error in case of one
	GetPosts(limit int, offset int) ([]types.Post, int, error)
	AddPost(post types.Post) error
	CheckAdminUser(User string, password string) bool
}

var store Store

func HttpServ(st Store) {
	store = st
	mux := http.NewServeMux()
	mux.HandleFunc("/", htmlHandler)
	mux.HandleFunc("/api/admin/", jToken)
	mux.HandleFunc("/api/addpost/", jkey.CheckAuth(htmlHandler))
	log.Fatal(http.ListenAndServe(":8888", mux))
}

func htmlHandler(w http.ResponseWriter, r *http.Request) {
	hwriter.HWriter(w, r, store.GetPosts)
}

func jToken(w http.ResponseWriter, r *http.Request) {
	jkey.JwtCreate(w, r)
}
