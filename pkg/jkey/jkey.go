package jkey

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var usersNum int

var jwtKey = []byte("my_ultra_super_puper_secret_key")

type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func CheckAuth(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		c, err := r.Cookie("token")
		var tknStr string
		if err != nil {
			if err == http.ErrNoCookie {
				tknStr = r.URL.Query().Get("jwt")
				if tknStr == "" {
					w.WriteHeader(http.StatusUnauthorized)
					returnError(w, "StatusUnauthorized jwt")
					return
				}
			} else {
				w.WriteHeader(http.StatusBadRequest)
				returnError(w, "StatusBadRequest")
				return
			}
		} else {
			tknStr = c.Value
		}
		claims := &Claims{}
		tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (any, error) {
			return jwtKey, nil
		})
		if err != nil {
			if err == jwt.ErrSignatureInvalid {
				w.WriteHeader(http.StatusUnauthorized)
				returnError(w, "StatusUnauthorized jwt")
				return
			}
			w.WriteHeader(http.StatusBadRequest)
			returnError(w, "StatusBadRequest")
			return
		}
		if !tkn.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			returnError(w, "StatusUnauthorized jwt")
			return
		}
		handler(w, r)

	}
}

func JwtCreate(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
	signin(w)
}

func signin(w http.ResponseWriter) {
	expirationTime := time.Now().Add(5 * time.Hour)
	claims := &Claims{
		Username: strconv.Itoa(usersNum),
		RegisteredClaims: jwt.RegisteredClaims{

			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	usersNum++
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
	})
	tokenResponse := map[string]string{"token": tokenString}
	w.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(w).Encode(tokenResponse)
	if err != nil {
		log.Println("Error create error.")
	}
}

func returnError(w http.ResponseWriter, errorMessage string) {
	w.Header().Set("Content-Type", "application/json")
	errorResponse := map[string]string{"error": errorMessage}
	err := json.NewEncoder(w).Encode(errorResponse)
	if err != nil {
		log.Println("Error create error.")
	}
}
