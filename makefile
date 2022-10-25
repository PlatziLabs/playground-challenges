create-js:
	rsync -av ./src/templates/vanilla-js/ ./src/challenges/js/$(name)/ --exclude='node_modules'
	cd ./src/challenges/js/$(name)/ && npm i

check:
	ifeq ("$(wildcard $(DIR_TO_CHECK_FOR))", "")
		@echo "Directory does not exist."
	else
		@echo "Skipping download because directory already exists."
	endif