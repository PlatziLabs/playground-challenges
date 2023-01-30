from main import searchInMatrix
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_number_is_in_matriz():
    module = reload_module('main')
    matriz = [
        [1,3,5,7],
        [10,11,16,20],
        [23,30,34,60],
    ]
    rta = module.searchInMatrix(matriz, 3)
    assert rta == True


def test_number_not_in_matriz():
    module = reload_module('main')
    matriz = [
        [1,3,5,7],
        [10,11,16,20],
        [23,30,34,60],
    ]
    rta = module.searchInMatrix(matriz, 12)
    assert rta == False
