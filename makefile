create-js:
	rsync -av ./src/templates/vanilla-js/ ./src/challenges/js/$(name)/ --exclude='node_modules'
	cd ./src/challenges/js/$(name)/ && npm i

create-py:
	rsync -av ./src/templates/python/ ./src/challenges/py/$(name)/ --exclude='env' --exclude='.pytest_cache'
