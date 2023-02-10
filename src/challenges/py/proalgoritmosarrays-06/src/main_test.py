from main import searchInMatrix
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_number_is_in_matrix():
    module = reload_module('main')
    matriz = [
        [1,3,5,7],
        [10,11,16,20],
        [23,30,34,60],
    ]
    rta = module.searchInMatrix(matriz, 3)
    assert rta == True

def test_number_is_at_end_of_matrix():
    module = reload_module('main')
    matriz = [
        [2,4,6,8],
        [10,12,14,16],
        [18,20,22,24],
    ]
    rta = module.searchInMatrix(matriz, 24)
    assert rta == True

def test_number_not_in_matrix():
    module = reload_module('main')
    matriz = [
        [1,3,5,7],
        [10,11,16,20],
        [23,30,34,60],
    ]
    rta = module.searchInMatrix(matriz, 12)
    assert rta == False

def test_number_is_greater_than_last_number_of_matrix():
    module = reload_module('main')
    matriz = [
        [1,3,5,7],
        [10,11,16,20],
        [23,30,34,60],
    ]
    rta = module.searchInMatrix(matriz, 80)
    assert rta == False
