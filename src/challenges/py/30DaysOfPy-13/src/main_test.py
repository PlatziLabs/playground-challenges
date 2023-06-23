from main import my_map
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_myMap_numbers():
  arr = [1, 2, 3, 4]
  func = lambda num: num * 2
  result = my_map(arr, func)
  assert result == [2, 4, 6, 8]

def test_myMap_dictionaries():
  arr = [
    {"name": "michi", "age": 2},
    {"name": "firulais", "age": 6}
  ]
  func = lambda pet: pet["name"]
  result = my_map(arr, func)
  assert result == ["michi", "firulais"]

def test_myMap_strings():
  arr = ["hello", "world", "python"]
  func = lambda word: word.upper()
  result = my_map(arr, func)
  assert result == ["HELLO", "WORLD", "PYTHON"]

def test_myMap_operations():
  arr = [5, 10, 15, 20]
  func = lambda num: num / 5
  result = my_map(arr, func)
  assert result == [1, 2, 3, 4]

def test_myMap_native_methods():
  arr = ["apple", "banana", "cherry"]
  func = lambda fruit: len(fruit)
  result = my_map(arr, func)
  assert result == [5, 6, 6]