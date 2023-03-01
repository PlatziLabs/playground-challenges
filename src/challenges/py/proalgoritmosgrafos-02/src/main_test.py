from main import numeroDeIslas
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_three_islands():
    module = reload_module('main')
    tests_map = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"],
    ]
    rta = module.numeroDeIslas(tests_map)
    assert rta == 3

def test_two_numbers():
    module = reload_module('main')
    tests_map = [
        ["1","1","0","0","1"],
        ["1","1","1","0","1"],
        ["0","0","1","0","1"],
        ["0","0","0","0","1"],
        ["0","0","0","0","1"],
    ]
    rta = module.numeroDeIslas(tests_map)
    assert rta == 2
