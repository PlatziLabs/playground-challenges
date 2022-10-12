create:
	rsync -av ./src/templates/vanilla-js/ ./src/challenges/$(name)/ --exclude='node_modules'
	cd ./src/challenges/$(name)/