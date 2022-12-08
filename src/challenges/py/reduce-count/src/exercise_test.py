from exercise import counter_numbers
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_case_1():
    reload_module('exercise')
    tests_list = [1, 2, 2, 3, 3, 3]
    rta = counter_numbers(tests_list)
    assert rta == {
      '1': 1,
      '2': 2,
      '3': 3,
    }

def test_case_2():
    reload_module('exercise')
    tests_list = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
    rta = counter_numbers(tests_list)
    assert rta == {
      '1': 2,
      '2': 2,
      '4': 3,
      '45': 1,
      '-3': 1,
      '-1': 2
    }

def test_case_3():
    reload_module('exercise')
    tests_list = []
    rta = counter_numbers(tests_list)
    assert rta == {}
