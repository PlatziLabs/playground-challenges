from main import lengthOfLongestSubstring
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_small_string():
    module = reload_module('main')
    test_string = "abcabcbb"
    rta = module.lengthOfLongestSubstring(test_string)
    assert rta == 3

def test_big_string():
    module = reload_module('main')
    test_string = "jdkafnlcdsalkxcmpoiuytfccv"
    rta = module.lengthOfLongestSubstring(test_string)
    assert rta == 15

def test_surprise_string():
    module = reload_module('main')
    tests_string = "lavacalolatinecabezapeloycola"
    rta = module.lengthOfLongestSubstring(tests_string)
    assert rta == 8

