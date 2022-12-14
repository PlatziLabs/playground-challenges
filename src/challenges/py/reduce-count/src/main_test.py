from main import counter_numbers
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_case_1():
    module = reload_module('main')
    tests_list = [1, 2, 2, 3, 3, 3]
    rta = module.counter_numbers(tests_list)
    assert rta == {1: 1, 2: 2, 3: 3}

def test_case_2():
    module = reload_module('main')
    tests_list = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
    rta = module.counter_numbers(tests_list)
    assert rta == {-3: 1, -1: 2, 1: 2, 2: 2, 4: 2, 45: 1}

def test_case_3():
    module = reload_module('main')
    tests_list = []
    rta = module.counter_numbers(tests_list)
    assert rta == {}
