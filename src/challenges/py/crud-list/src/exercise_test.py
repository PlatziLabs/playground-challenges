from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_array(capfd):
    reload_module('exercise')
    expected_str = "['G', 'F', 'E', 'D', 'B', 'Z']\n"
    out, error = capfd.readouterr()
    assert out  == expected_str
