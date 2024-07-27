package main

import (
	mserver "leftrana/superhero/internal/mserver"
	"leftrana/superhero/pkg/config"
	db "leftrana/superhero/pkg/pgdb"
	"log"
)

func main() {
	config, err := config.GetConfig("admin_credentials.txt")
	if err != nil {
		log.Fatal(err)
	}
	base := db.NewPostStore(config.Server.Dsn)
	s := mserver.NewHttpServ(base, config.Admin)
	s.ServStart()
}
