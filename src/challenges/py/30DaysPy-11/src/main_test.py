from main import count_words_by_length
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_count_words_by_length():
  words = ["apple", "banana", "orange", "grapefruit", "pear", "kiwi"]
  result = count_words_by_length(words)
  assert result == { 4:2, 5: 1, 6: 2, 10: 1 }

def test_count_words_by_length_empty():
  words = []
  result = count_words_by_length(words)
  assert result == {}

def test_count_words_by_length_single_word():
  words = ["hello"]
  result = count_words_by_length(words)
  assert result == {5: 1}

def test_count_words_by_length_same_length():
  words = ["apple", "banana", "orange"]
  result = count_words_by_length(words)
  assert result == {5: 1, 6: 2}

def test_count_words_by_length_duplicate_words():
  words = ["apple", "banana", "apple", "orange", "banana"]
  result = count_words_by_length(words)
  assert result == {5: 2, 6: 3}