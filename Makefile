all: ex00 ex01-02

ex00:
	cd ./pkg/image_creator && go test .
	cd ./cmd/png_logo_creator && go run .

ex01-02:
	cd ./cmd/site_server && go run .

clean:
	rm -rf cmd/site_server/static cmd/png_logo_creator/amazing_logo.png