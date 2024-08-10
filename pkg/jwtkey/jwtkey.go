package jwtkey

import (
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"

	jwt "github.com/golang-jwt/jwt/v5"
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
				log.Println("no cookie, query used")
				tknStr = r.URL.Query().Get("jwt")
				if tknStr == "" {
					w.WriteHeader(http.StatusUnauthorized)
					ReturnError(w, "StatusUnauthorized jwt")
					return
				}
			} else {
				w.WriteHeader(http.StatusBadRequest)
				ReturnError(w, "StatusBadRequest")
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
				ReturnError(w, "StatusUnauthorized jwt")
				return
			}
			w.WriteHeader(http.StatusBadRequest)
			ReturnError(w, "StatusBadRequest")
			return
		}
		if !tkn.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			ReturnError(w, "StatusUnauthorized jwt")
			return
		}
		handler(w, r)
	}

}

func JwtCreate(w http.ResponseWriter, r *http.Request) {
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
}

func ReturnError(w http.ResponseWriter, errorMessage string) {
	html := createErrPost(errorMessage)

	w.Write([]byte(html))
}

func createErrPost(errorMessage string) string {
	var html strings.Builder
	html.WriteString(`
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, interactive-widget=overlays-content" />

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />

    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />

    <link href="/static/css/theme/theme.css" rel="stylesheet">
    <link href="/static/css/styles.css" rel="stylesheet">
    <script src="/static/js/web-components.js" async></script>

    <title>Hero Blog</title>
    <meta name="description" content="Hero Blog">
</head>

<body class="light">
	<header>
		<img src="static/images/amazing_logo.png" width="60" height="60" alt="wonderful logo">
		<div>Hero Blog</div>
	</header>
	<main class="post-added">
		<div>Login or password incorrect</div>       
		<a href="/admin">
			<md-filled-button>
                Back
                <md-icon slot="icon">arrow_back</md-icon>
            </md-filled-button>
		</a>
	</main>
</body>
`)
	html.WriteString(errorMessage)
	return html.String()
}
