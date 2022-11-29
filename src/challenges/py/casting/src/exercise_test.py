import unittest.mock
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_case_1(capfd):
    def side_effect(value):
        if value == '¿Cuál es tu nombre? => ':
            return 'Nicolas'
        if value == '¿Cuál es tu apellido? => ':
            return 'Molina'
        if value == '¿Cuál es tu edad? => ':
            return '10'
        return None
    with unittest.mock.patch('builtins.input', side_effect):
        import exercise
        expected_str = "Hola mi nombre es Nicolas Molina, tengo 10 años y en 10 años tendré 20 años\n"
        out, error = capfd.readouterr()
        assert out  == expected_str

def test_case_2(capfd):
    def side_effect(value):
        if value == '¿Cuál es tu nombre? => ':
            return 'Juan'
        if value == '¿Cuál es tu apellido? => ':
            return 'Perez'
        if value == '¿Cuál es tu edad? => ':
            return '20'
        return None
    with unittest.mock.patch('builtins.input', side_effect):
        reload_module('exercise')
        expected_str = "Hola mi nombre es Juan Perez, tengo 20 años y en 10 años tendré 30 años\n"
        out, error = capfd.readouterr()
        assert out  == expected_str