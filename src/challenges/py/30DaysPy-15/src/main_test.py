from main import calculate_discounted_price
from importlib import reload, import_module
import shutil
import pytest


def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_calculate_discounted_price_positive():
    assert calculate_discounted_price(100, 0.2) == 80.0
    assert calculate_discounted_price(80, 0.5) == 40.0
    assert calculate_discounted_price(200, 0.1) == 180.0

def test_calculate_discounted_price_zero_discount():
    assert calculate_discounted_price(150, 0) == 150.0
    assert calculate_discounted_price(90, 0) == 90.0
    assert calculate_discounted_price(120, 0) == 120.0

def test_calculate_discounted_price_negative_values():
    with pytest.raises(ValueError, match="El precio y el descuento deben ser valores positivos"):
        calculate_discounted_price(-50, 0.2)
    with pytest.raises(ValueError, match="El precio y el descuento deben ser valores positivos"):
        calculate_discounted_price(100, -0.1)
    with pytest.raises(ValueError, match="El precio y el descuento deben ser valores positivos"):
        calculate_discounted_price(-80, -0.5)

def test_calculate_discounted_price_non_numeric_values():
    with pytest.raises(TypeError, match="El precio y el descuento deben ser números"):
        calculate_discounted_price(120, '0.2')
    with pytest.raises(TypeError, match="El precio y el descuento deben ser números"):
        calculate_discounted_price('90', 0.1)
    with pytest.raises(TypeError, match="El precio y el descuento deben ser números"):
        calculate_discounted_price('abc', '0.5')