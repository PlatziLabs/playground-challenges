from importlib import reload, import_module
import shutil
import unittest.mock

def reload_module(name):
    module = import_module(name)
    shutil.rmtree("__pycache__", ignore_errors=True)
    reload(module)
    return module

def test_name(capfd):
    def side_effect(value):
        if value == 'Digita un texto => ':
            return 'Texto'
        if value == '¿Cuál es tu nombre? => ':
            return 'Juana'
        if value == '¿Cuál es tu edad? => ':
            return '20'
        return None
    with unittest.mock.patch('builtins.input', side_effect):
        import exercise
        assert exercise.name == 'Juana'
        expected_str = "Texto\nJuana\n20\n"
        out, error = capfd.readouterr()
        assert out  == expected_str

def test_age(capfd):
    def side_effect(value):
        if value == 'Digita un texto => ':
            return 'Texto'
        if value == '¿Cuál es tu nombre? => ':
            return 'Julian'
        if value == '¿Cuál es tu edad? => ':
            return '10'
        return None
    with unittest.mock.patch('builtins.input', side_effect):
        module = reload_module('exercise')
        assert module.age == '10'
        expected_str = "Texto\nJulian\n10\n"
        out, error = capfd.readouterr()
        assert out  == expected_str