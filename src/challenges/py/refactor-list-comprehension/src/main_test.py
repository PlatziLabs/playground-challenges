from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_many_countries(capfd):
    reload_module('main')
    expected_str = "[16, 10, 34]\n"
    out, error = capfd.readouterr()
    assert out  == expected_str