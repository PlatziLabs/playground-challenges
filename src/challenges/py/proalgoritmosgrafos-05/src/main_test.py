from main import Bridge
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_two_jumps():
    module = reload_module('main')
    test_map = [
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
    ]
    rta = module.Bridge().shortestBridge(test_map)
    assert rta == 1

def test_three_jumps():
    module = reload_module('main')
    test_map = [
        [1,1,0,0,1],
        [1,1,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,1,1],
    ]
    rta = module.Bridge().shortestBridge(test_map)
    assert rta == 2
