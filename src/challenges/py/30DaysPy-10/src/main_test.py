from main import find_words_with_two_vowels
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_find_words_with_two_vowels_1():
  words = [
    "hello",
    "Python",
    "world",
    "platzi"
  ]
  result = find_words_with_two_vowels(words)
  assert result == ["hello", "platzi"]

def test_find_words_with_two_vowels_2():
  words = [
    "text",
    "test",
    "python",
    "example"
  ]
  result = find_words_with_two_vowels(words)
  assert result == []

def test_find_words_with_two_vowels_3():
  words = [
    "Apple",
    "banana",
    "orange",
    "grapefruit"
  ]
  result = find_words_with_two_vowels(words)
  assert result == ["Apple"]

def test_find_words_with_two_vowels_4():
  words = [
    "Python",
    "programming",
    "language",
    "tutorial"
  ]
  result = find_words_with_two_vowels(words)
  assert result == []