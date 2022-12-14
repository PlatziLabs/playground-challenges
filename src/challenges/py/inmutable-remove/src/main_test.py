from main import remove_from_list
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_numbers():
    module = reload_module('main')
    original_list = [1, 2, 3]
    rta = module.remove_from_list(original_list, 2)
    assert rta == [1, 2]
    assert original_list == [1, 2, 3]

def test_negative_numbers():
    module = reload_module('main')
    original_list = [1, 2]
    rta = module.remove_from_list(original_list, 0)
    assert rta == [2]
    assert original_list == [1, 2]
