import numpy as np
from main import crear_array
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_crear_array():
    module = reload_module('main')    
    lista = [1, 2, 3, 4]
    respuesta = module.crear_array(lista)
    assert isinstance(respuesta, np.ndarray), 'La función no retorna un numpy array.'
    assert np.all(respuesta == lista), 'El array retornado no coincide con la lista original.'

test_crear_array()