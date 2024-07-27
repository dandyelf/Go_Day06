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
	CheckAdminUser(User string, password string) bool
}

var store Store

// https://github.com/rus-sharafiev/go-rest-common/blob/main/spa/handler.go

func HttpServ(st Store) {
	store = st
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("static/"))
	mux.Handle("/static/", http.StripPrefix("/static/", fs))
	mux.HandleFunc("/admin", adminHandler)
	mux.HandleFunc("/addpost", dbHandler)
	mux.HandleFunc("/", htmlHandler)
	log.Fatal(http.ListenAndServe(":8888", mux))
}

func htmlHandler(w http.ResponseWriter, r *http.Request) {
	hwriter.PostsPageWriter(w, r, store)
}

func adminHandler(w http.ResponseWriter, r *http.Request) {

}

func dbHandler(w http.ResponseWriter, r *http.Request) {
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
	log.Printf("user: %v, password: %v", user, passoword)
}

// func createPost(post *types.Post) error {
// 	var err error
// 	if post != nil {
// 		err = store.AddPost(post)
// 	}
// 	return err
// }
