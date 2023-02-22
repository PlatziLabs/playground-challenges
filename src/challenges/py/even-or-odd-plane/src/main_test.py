from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test(capfd):
    module = reload_module('main')
    out, error = capfd.readouterr()
    number = int(module.number)
    expected_str = ''
    if number % 2 == 0:
        expected_str = 'par'
    else:
        expected_str = 'impar'
    assert expected_str in out
