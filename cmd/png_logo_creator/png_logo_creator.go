package main

import (
	"image/png"
	"leftrana/superhero/pkg/image_creator"
	"log"
	"os"
)

func main() {
	const width, height = 300, 300
	creator, err := image_creator.NewLogoCreator(width, height)
	if err != nil {
		log.Fatal(err)
	}

	lg := creator.GetLogo()
	f, err := os.Create("amazing_logo.png")
	if err != nil {
		log.Fatal(err)
	}
	if err := png.Encode(f, lg); err != nil {
		f.Close()
		log.Fatal(err)
	}
	if err := f.Close(); err != nil {
		log.Fatal(err)
	}
}
