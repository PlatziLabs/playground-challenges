from main import is_even_or_odd
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_even():
    module = reload_module('main')
    assert module.is_even_or_odd(2)  == 'Es par'
    assert module.is_even_or_odd(-2)  == 'Es par'
    assert module.is_even_or_odd(4)  == 'Es par'

def test_odd():
    module = reload_module('main')
    assert module.is_even_or_odd(1)  == 'Es impar'
    assert module.is_even_or_odd(3)  == 'Es impar'
    assert module.is_even_or_odd(-9)  == 'Es impar'