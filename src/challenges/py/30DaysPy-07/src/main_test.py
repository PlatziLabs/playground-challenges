from main import count_letters
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_hola_mundo():
	test_phrase = "Hola mundo"
	rta = count_letters(test_phrase)
 
	assert rta == {
		'H': 1, 
		'o': 2, 
		'l': 1, 
		'a': 1, 
		' ': 1, 
		'm': 1, 
		'u': 1, 
		'n': 1, 
		'd': 1
	}

def test_empty_string():
	test_phrase = ""
	rta = count_letters(test_phrase)
	assert rta == {}

def test_case_sensitivity():
	test_phrase = "Hello World"
	rta = count_letters(test_phrase)
	assert rta == {'H': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'W': 1, 'r': 1, 'd': 1}

def test_special_characters():
	test_phrase = "I love pizza!!!"
	rta = count_letters(test_phrase)
	assert rta == {'I': 1, ' ': 2, 'l': 1, 'o': 1, 'v': 1, 'e': 1, 'p': 1, 'i': 1, 'z': 2, 'a': 1, '!': 3}

def test_numbers():
	test_phrase = "There are 12 apples"
	rta = count_letters(test_phrase)
	assert rta == {'T': 1, 'h': 1, 'e': 4, 'r': 2, ' ': 3, 'a': 2, '1': 1, '2': 1, 'p': 2, 'l': 1, 's': 1}

def test_long_phrase():
	test_phrase = "Lorem ipsum dolor sit amet, consecetur adipiscing eit. Sed euismod mollis est, at dictum lectus auctor vel. Vivamus sit amet sem massa."
	rta = count_letters(test_phrase)
 
	assert rta == {'L': 1, 'o': 7, 'r': 4, 'e': 12, 'm': 10, ' ': 21, 'i': 11, 'p': 2, 's': 13, 'u': 7, 'd': 5, 'l': 5, 't': 11, 'a': 8, ',': 2, 'c': 6, 'n': 2, 'g': 1, '.': 3, 'S': 1, 'v': 2, 'V': 1}