package mserver

import (
	"io"
	"leftrana/superhero/pkg/hwriter"
	"leftrana/superhero/pkg/jkey"
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

func HttpServ(st Store) {
	store = st
	mux := http.NewServeMux()
	mux.HandleFunc("/", htmlHandler) // https://github.com/rus-sharafiev/go-rest-common/blob/main/spa/handler.go
	mux.HandleFunc("/admin/", jToken)
	mux.HandleFunc("/addpost", dbHandler)
	log.Fatal(http.ListenAndServe(":8888", mux))
}

func htmlHandler(w http.ResponseWriter, r *http.Request) {
	hwriter.HWriter(w, r, store)
}

func jToken(w http.ResponseWriter, r *http.Request) {
	jkey.JwtCreate(w, r)
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
