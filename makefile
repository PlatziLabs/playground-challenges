create:
	rsync -av ./src/templates/vanilla-js/ ./src/challenges/js-03/ --exclude='node_modules'