from main import sum_numbers
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_sum_consecutive_numbers():
    module = reload_module('main')
    nodo1 = module.Nodo(1)
    nodo2 = module.Nodo(2)
    nodo3 = module.Nodo(3)
    nodo4 = module.Nodo(4)
    nodo5 = module.Nodo(5)
    nodo6 = module.Nodo(6)
    nodo7 = module.Nodo(7)
    nodo1.izquierda = nodo2
    nodo1.derecha = nodo3
    nodo2.izquierda = nodo4
    nodo2.derecha = nodo5
    nodo3.izquierda = nodo6
    nodo3.derecha = nodo7
    rta = module.sum_numbers(nodo1)
    assert rta == 522

def test_sum_reverse_numbers():
    module = reload_module('main')
    nodo1 = module.Nodo(9)
    nodo2 = module.Nodo(8)
    nodo3 = module.Nodo(7)
    nodo4 = module.Nodo(6)
    nodo5 = module.Nodo(5)
    nodo6 = module.Nodo(4)
    nodo7 = module.Nodo(3)
    nodo1.izquierda = nodo2
    nodo1.derecha = nodo3
    nodo2.izquierda = nodo4
    nodo2.derecha = nodo5
    nodo3.izquierda = nodo6
    nodo3.derecha = nodo7
    rta = module.sum_numbers(nodo1)
    assert rta == 3918
