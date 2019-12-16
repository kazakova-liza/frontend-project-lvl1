install:
	npm install

start: 
	npx babel-node src/bin/games/brain-prime.js

publish:
	npm publish --dry-run

make lint:
	npx eslint src/bin/games/brain-prime.js

