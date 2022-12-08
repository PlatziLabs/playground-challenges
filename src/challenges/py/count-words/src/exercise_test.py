from exercise import count_words
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

reload_module('exercise')

def test_case_1():
    tests_list = [
      "Beautiful is better than ugly",
      "Explicit is better than implicit",
      "Simple is better than complex",
      "Complex is better than complicated"
    ]
    rta = count_words(tests_list)
    assert rta == 20

def test_case_2():
    tests_list = [
      "Hola hola hola",
      "hola",
      "hola hola",
      "hola"
    ]
    rta = count_words(tests_list)
    assert rta == 7

def test_case_3():
    tests_list = []
    rta = count_words(tests_list)
    assert rta == 0

def test_case_4():
    tests_list = ['hola']
    rta = count_words(tests_list)
    assert rta == 1