build:
	rm -rf dist && npm run build
	NODE_ENV=production npx webpack