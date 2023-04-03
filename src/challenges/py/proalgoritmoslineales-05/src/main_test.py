from main import isValid
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_consecutive_parentheses():
    module = reload_module('main')
    tests_str = '()()()'
    rta = module.isValid(tests_str)
    assert rta == True

def test_complex_parentheses():
    module = reload_module('main')
    tests_str = '((()())())'
    rta = module.isValid(tests_str)
    assert rta == True

def test_closing_parenthesis_at_start():
    module = reload_module('main')
    tests_str = ')(()'
    rta = module.isValid(tests_str)
    assert rta == False

def test_missing_closing_parenthesis():
    module = reload_module('main')
    tests_str = '(1 + 2) * (3-4'
    rta = module.isValid(tests_str)
    assert rta == False
