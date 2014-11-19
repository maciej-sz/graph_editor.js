all: deps build

default: all

build:
	@echo "\nBuilding project"
	@echo "\nCompiling JS"
	@browserify -r ./src/js/graph_editor.js:graph_editor -o dist/js/graph_editor.js
	@echo "\nMinifiyng JS"
	@build/build.js
	@echo "\nDone\n"

deps:
	@echo "\nPruning Node.js dependencies"
	@npm prune
	@echo "\nUpdating Node.js dependencies"
	@npm update
	@echo "\nUpdating Bower dependencies"
	@bower update

.PHONY: build