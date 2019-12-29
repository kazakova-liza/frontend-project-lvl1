install:
	npm install

start: 
	npx babel-node src/bin/run-brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx eslint src/bin/run-brain-calc.js

