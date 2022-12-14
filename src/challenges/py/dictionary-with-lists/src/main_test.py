from main import dictionary_with_lists
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_names_dictionary():
    module = reload_module('main')
    solution = {
        'school': "Platzi",
        'names': ["Pepe", "Luis"],
        'first_student': "Pepe",
        'last_student': "Luis",
        'count': 2
    }
    tests_names = ["Pepe", "Luis"]
    rta = module.dictionary_with_lists(tests_names)
    assert rta == solution


def test_with_one_name():
    module = reload_module('main')
    solution = {
        'school': "Platzi",
        'names': ["Pedro"],
        'first_student': "Pedro",
        'last_student': "Pedro",
        'count': 1
    }
    tests_names = ["Pedro"]
    rta = module.dictionary_with_lists(tests_names)
    assert rta == solution


def test_with_many_names():
    module = reload_module('main')
    solution = {
        'school': "Platzi",
        'names': ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"],
        'first_student': "Pedro",
        'last_student': "Saul",
        'count': 6
    }
    tests_names = ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"]
    rta = module.dictionary_with_lists(tests_names)
    assert rta == solution
