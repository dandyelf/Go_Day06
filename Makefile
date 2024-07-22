all: ex00 ex01

ex00:
	cd ./pkg/image_creator && go test .
	cd ./cmd/png_logo_creator && go run .

ex01:
	cd ./cmd/site_server && go run .

ex03:
	cd ./pkg/presents && go test .
