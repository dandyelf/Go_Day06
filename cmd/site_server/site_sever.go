package main

import (
	mserver "leftrana/superhero/internal/mserver"
	db "leftrana/superhero/pkg/pgdb"
)

func main() {
	base := db.NewPostStore("")
	mserver.HttpServ(base)
}
