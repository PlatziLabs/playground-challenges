from exercise import count_words
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_case_1():
    module = reload_module('exercise')
    tests_list = [
      "Beautiful is better than ugly",
      "Explicit is better than implicit",
      "Simple is better than complex",
      "Complex is better than complicated"
    ]
    rta = module.count_words(tests_list)
    assert rta == 20

def test_case_2():
    module = reload_module('exercise')
    tests_list = [
      "Hola hola hola",
      "hola",
      "hola hola",
      "hola"
    ]
    rta = module.count_words(tests_list)
    assert rta == 7

def test_case_3():
    module = reload_module('exercise')
    tests_list = []
    rta = module.count_words(tests_list)
    assert rta == 0

def test_case_4():
    reload_module('exercise')
    tests_list = ['hola']
    rta = count_words(tests_list)
    assert rta == 1