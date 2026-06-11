.PHONY: build clean force-build run test lint preview

build:
	npm run build

clean:
	rm -rf dist
	rm -rf .angular/cache

force-build: clean build

run:
	npm start

test:
	npm test

lint:
	npm run lint

preview: build
	cd dist/cyril-defaye-fr/browser && python3 -m http.server 8080
