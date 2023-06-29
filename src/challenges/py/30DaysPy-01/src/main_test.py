from main import calculate_tip
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_tip_integer():
    assert calculate_tip(100, 10) == 10
    assert calculate_tip(50, 15) == 7.5
    assert calculate_tip(0, 0) == 0


def test_tip_float():
    assert calculate_tip(1524.33, 25) == 381.08
    assert calculate_tip(20.50, 18) == 3.69
    assert calculate_tip(3.14, 50) == 1.57

def test_tip_mixed():
    assert calculate_tip(1234, 12.5) == 154.25
    assert calculate_tip(45.67, 20) == 9.13
    assert calculate_tip(0, 15.5) == 0