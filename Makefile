.PHONY: build clean force-build run test lint preview deploy

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

version:
	npm version $(VERSION) --no-git-tag-version

release: version
	git add package.json package-lock.json
	git commit -m "chore(release): Release v$(VERSION)"
	git tag -a v$(VERSION) -m "v$(VERSION)"

deploy:
	./scripts/deploy.sh
