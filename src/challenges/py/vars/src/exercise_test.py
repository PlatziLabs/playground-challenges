from importlib import reload, import_module
import shutil
import unittest.mock

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def side_effect(value):
    if value == 'Digita un texto => ':
        return 'Texto'
    if value == 'Digita tu nombre => ':
        return 'Juana'
    if value == 'Digita tu edad => ':
        return '20'
    return None

def test_name(capfd):
    with unittest.mock.patch('builtins.input', side_effect):
        module = reload_module('exercise')
        assert module.name == 'Juana'
        assert module.age == '20'
        expected_str = "Texto\nJuana\n20\nTexto\nJuana\n20\n"
        out, error = capfd.readouterr()
        assert out  == expected_str