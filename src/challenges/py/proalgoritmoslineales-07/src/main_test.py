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

def test_string_without_repeted_letters():
    module = reload_module('main')
    tests_str = "zebra"
    rta = module.reorganizeString(tests_str)
    assert rta == "zebra" or rta == "zebra"

def test_small_string():
    module = reload_module('main')
    tests_str = "xxy"
    rta = module.reorganizeString(tests_str)
    assert rta == "xyx"

def test_not_reorganizable_string():
    module = reload_module('main')
    tests_str = "aaac"
    rta = module.reorganizeString(tests_str)
    assert rta == ""
