from main import find_largest_palindrome
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_find_largest_palindrome_1():
  words = ["racecar", "level", "world", "hello"]
  rta = find_largest_palindrome(words)
  assert rta == "racecar"


def test_find_largest_palindrome_2():
  words = ["platzi", "python", "django", "flask"]
  rta = find_largest_palindrome(words)
  assert rta is None


def test_find_largest_palindrome_3():
  words = ["wow", "now", "madam", "civic"]
  rta = find_largest_palindrome(words)
  assert rta == "madam"


def test_find_largest_palindrome_4():
  words = ["asdfsrtetrew", "level", "noon", "repaper"]
  rta = find_largest_palindrome(words)
  assert rta == "repaper"
