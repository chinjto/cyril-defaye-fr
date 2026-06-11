.PHONY: build clean rebuild serve

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
