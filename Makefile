install:
	npm install

start: 
	npx babel-node src/bin/brain-prime.js

publish:
	npm publish --dry-run

make lint:
	npx eslint

