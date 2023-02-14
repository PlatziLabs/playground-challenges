from main import multiply_numbers
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_print_numpy(capfd):
    reload_module('main')
    expected_str = "<class 'numpy.ndarray'>"
    out, error = capfd.readouterr()
    assert expected_str in out