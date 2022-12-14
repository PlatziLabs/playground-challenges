from exercise import my_divide
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_case_1():
    module = reload_module('exercise')
    rta = module.my_divide(10, 2)
    assert rta == 5.0

def test_case_2():
    module = reload_module('exercise')
    rta = module.my_divide(10, 0)
    assert rta == 'No se puede dividir por 0'

def test_case_3():
    module = reload_module('exercise')
    rta = module.my_divide(1200, 0)
    assert rta == 'No se puede dividir por 0'

def test_case_4():
    module = reload_module('exercise')
    rta = module.my_divide(20, 2)
    assert rta == 10