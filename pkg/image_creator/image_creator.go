package image_creator

import (
	"fmt"
	"image"
	"image/color"

	"github.com/golang/freetype/truetype"
	"golang.org/x/image/font"
	"golang.org/x/image/font/gofont/goregular"
	"golang.org/x/image/math/fixed"
)

const s = "size err"

type Logo struct {
	width, height int
}

func NewLogoCreator(width, height int) (*Logo, error) {
	logo := new(Logo)
	if width <= 0 || height <= 0 {
		return nil, fmt.Errorf(s)
	}
	logo.width = width
	logo.height = height
	return logo, nil
}

func (logo Logo) GetLogo() image.Image {
	img := image.NewNRGBA(image.Rect(0, 0, logo.width, logo.height))
	for y := 0; y < logo.height; y++ {
		for x := 0; x < logo.width; x++ {
			img.Set(x, y, color.NRGBA{
				R: uint8((x + y) & 255),
				G: uint8((x + y) << 1 & 255),
				B: uint8((x + y) << 2 & 255),
				A: 255,
			})
		}
	}
	b := goregular.TTF
	f, _ := truetype.Parse(b)
	d := &font.Drawer{
		Dst:  img,
		Src:  image.NewUniform(color.RGBA{R: 255, A: 255}),
		Face: truetype.NewFace(f, &truetype.Options{Size: (float64)(logo.height) / 1.3}),
		Dot:  fixed.P(logo.width/8, logo.height/2),
	}
	d2 := &font.Drawer{
		Dst:  img,
		Src:  image.NewUniform(color.White),
		Face: truetype.NewFace(f, &truetype.Options{Size: (float64)(logo.height) / 1.3}),
		Dot:  fixed.P(logo.width/3, logo.height-logo.height/12),
	}
	d.DrawString("H")
	d2.DrawString("R")
	return img
}
