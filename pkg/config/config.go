package config

import (
	"encoding/json"
	"leftrana/superhero/types"
	"log"
	"os"
)

func GetConfig(src string) (*types.Config, error) {
	config := new(types.Config)

	data, err := os.ReadFile(src)
	if err != nil {
		log.Fatalf("error reading file: %v", err)
	}

	err = json.Unmarshal(data, &config)
	if err != nil {
		log.Fatalf("error unmarshalling file: %v", err)
	}
	log.Println("config loaded")
	return config, nil
}
