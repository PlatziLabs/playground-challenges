from main import filter_by_length
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_words():
    module = reload_module('main')
    tests_list = ['amor', 'sol', 'piedra', 'día']
    rta = module.filter_by_length(tests_list)
    assert rta == ['amor', 'piedra']

def test_empty():
    module = reload_module('main')
    tests_list = ['aa', 'a', 'bb', 'cc']
    rta = module.filter_by_length(tests_list)
    assert rta == []