from importlib import reload, import_module
import shutil
import unittest.mock

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_template(capfd):
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
        expected_str = "Juan\nPerez\n20\nHola mi nombre es Juan Perez, tengo 20 años y en 10 años tendré 30 años\n"
        out, error = capfd.readouterr()
        assert out  == expected_str