from importlib import reload, import_module
import shutil
import exercise

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_print_hello(capfd):
    reload_module('exercise')
    expected_str = "Te doy la bienvenida al Coding Playground\nMi primer print\n30\n"
    out, error = capfd.readouterr()
    assert out  == expected_str