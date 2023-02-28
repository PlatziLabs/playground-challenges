from main import minKnightMoves
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_one_move():
    module = reload_module('main')
    origenX = 0
    origenY = 0
    objetivoX = 5
    objetivoY = 5
    rta = module.minKnightMoves(origenX, origenY, objetivoX, objetivoY)
    assert rta == 4

def test_multiple_moves():
    module = reload_module('main')
    origenX = -1
    origenY = -2
    objetivoX = 0
    objetivoY = 0
    rta = module.minKnightMoves(origenX, origenY, objetivoX, objetivoY)
    assert rta == 1

