package config

import (
	"encoding/json"
	"io/ioutil"
	"leftrana/superhero/types"
	"log"

	"github.com/spf13/viper"
)

func GetConfig(src string) (*types.Config, error) {
	config := new(types.Config)

	viper.SetConfigFile(src) // Устанавливаем файл конфигурации
	viper.ReadInConfig()     // Читаем файл конфигурации

	err := viper.Unmarshal(&config) // Распарсим конфигурацию в структуру
	if err != nil {
		log.Println("Failed to parse config:", err)
		return nil, err
	}
	data, err := ioutil.ReadFile("config.txt")
	if err != nil {
		log.Fatal(err)
	}

	var config Config
	err = json.Unmarshal(data, &config)
	if err != nil {
		log.Fatal(err)
	}

	log.Println(config)
	return config, nil
}
