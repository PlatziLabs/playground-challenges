from main import found_type
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_numbers():
    test_number = 112233
    rta = found_type(test_number)
    assert rta is int

def test_strings():
    test_string = "Hello world"
    rta = found_type(test_string)
    assert rta is str

def test_booleans():
    test_boolean = False
    rta = found_type(test_boolean)
    assert rta is bool