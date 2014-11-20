all: deps build

default: all

build:
	@echo "Building project"
	@echo "Compiling JS"
	@browserify -r ./src/js/graph_editor.js:graph_editor -o dist/js/graph_editor.js
	@echo "Minifiyng JS"
	@build/build.js
	@echo "Done"

dependencies: deps

deps:
	@echo "Pruning Node.js dependencies"
	@npm prune
	@echo "Updating Node.js dependencies"
	@npm update
	@echo "Pruning Bower dependencies"
	@npm prune
	@echo "Updating Bower dependencies"
	@bower update

.PHONY: build