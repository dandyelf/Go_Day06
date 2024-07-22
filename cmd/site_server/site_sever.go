package main

import (
	mserver "leftrana/superhero/internal/mserver"
	db "leftrana/superhero/pkg/pgdb"
)

func main() {
	var db db.PostStore
	mserver.HttpServ(&db)
}
