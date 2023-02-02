from main import reorganizeString
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_reorganizable_string():
    module = reload_module('main')
    tests_str = "aabac"
    rta = module.reorganizeString(tests_str)
    assert rta == "abaca" or rta == "acaba"

def test_reorganizable_string():
    module = reload_module('main')
    tests_str = "aaac"
    rta = module.reorganizeString(tests_str)
    assert rta == ""
