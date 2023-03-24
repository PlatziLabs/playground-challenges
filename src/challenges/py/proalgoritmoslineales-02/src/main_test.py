from main import hasCycle
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_liked_list_with_cycle():
    module = reload_module('main')

    nodo1 = module.Nodo(1)
    nodo2 = module.Nodo(2)
    nodo3 = module.Nodo(3)
    nodo4 = module.Nodo(4)
    nodo5 = module.Nodo(4)
    nodo1.siguiente = nodo2
    nodo2.siguiente = nodo3
    nodo3.siguiente = nodo4
    nodo4.siguiente = nodo5
    nodo5.siguiente = nodo4

    rta = module.hasCycle(nodo1)
    assert rta == True

def test_liked_list_without_cycle():
    module = reload_module('main')

    nodo1 = module.Nodo("a")
    nodo2 = module.Nodo("b")
    nodo3 = module.Nodo("c")
    nodo4 = module.Nodo("d")
    nodo1.siguiente = nodo2
    nodo2.siguiente = nodo3
    nodo3.siguiente = nodo4

    rta = module.hasCycle(nodo1)
    assert rta == False
