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
	zip.Unzip("static", "static.zip")
	base := db.NewPostStore(config.Server)
	s := mserver.NewHttpServ(base, config.Admin)
	for _, v := range config.Posts {
		s.PushPostOnDb(&v)
	}
	s.ServStart()
}
