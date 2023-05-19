from main import find_set_intersection
from importlib import reload, import_module
import shutil


def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_find_set_intersection_1():
  sets = [
    {1, 2, 3, 4},
    {2, 3, 4, 5},
    {3, 4, 5, 6}
  ]
  result = find_set_intersection(sets)
  assert result == {3, 4}


def test_find_set_intersection_2():
  sets = [
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
  ]
  result = find_set_intersection(sets)
  assert result == set()


def test_find_set_intersection_3():
  sets = [
    {1, 2, 3, 4, 5},
    {3, 4, 5, 6},
    {5, 6, 7, 8}
  ]
  result = find_set_intersection(sets)
  assert result == {5}


def test_find_set_intersection_4():
  sets = [
    {1, 2, 3, 4},
    {2, 4, 6, 8},
    {3, 6, 9, 12}
  ]
  result = find_set_intersection(sets)
  assert result == set()


def test_find_set_intersection_5():
  sets = []
  result = find_set_intersection(sets)
  assert result == set()
