package main

import (
	mserver "leftrana/superhero/internal/mserver"
	"leftrana/superhero/pkg/config"
	db "leftrana/superhero/pkg/pgdb"
	"leftrana/superhero/pkg/zip"
	"log"
)

func main() {
	config, err := config.GetConfig("admin_credentials.txt")
	if err != nil {
		log.Fatal(err)
	}
	err = zip.Unzip("../site_server", "static.zip")
	if err != nil {
		log.Fatal(err)
	}
	base := db.NewPostStore(config.Server)
	s := mserver.NewHttpServ(base, config.Http)
	for _, v := range config.Posts {
		s.PushPostOnDb(&v)
	}
	log.Println("try to start server on http://localhost:8888, admin page: http://localhost:8888/admin/")
	s.ServStart()
}
