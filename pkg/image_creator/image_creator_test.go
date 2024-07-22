package image_creator_test

import (
	"fmt"
	"leftrana/superhero/pkg/image_creator"
	"testing"
)

const u = "create err"

func TestCreateImage(t *testing.T) {
	creator, err := image_creator.NewLogoCreator(5, 5)
	if err != nil {
		t.Errorf(u)
	}
	img := creator.GetLogo()
	fmt.Println(img)

}
