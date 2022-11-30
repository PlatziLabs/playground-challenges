from importlib import reload, import_module
import shutil
import unittest.mock

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_even(capfd):
    with unittest.mock.patch('builtins.input', return_value="10"):
        reload_module('exercise')
        expected_str = "10\nEs par\n"
        out, error = capfd.readouterr()
        assert out  == expected_str

def test_odd(capfd):
    with unittest.mock.patch('builtins.input', return_value="15"):
        reload_module('exercise')
        expected_str = "15\nEs impar\n"
        out, error = capfd.readouterr()
        assert out  == expected_str