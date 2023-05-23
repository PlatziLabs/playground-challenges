import pytest
from main import calculate_average
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_calculate_average_valid_input():
  nums = [1, 2, 3, 4, 5]
  assert calculate_average(nums) == 3.0

def test_calculate_average_empty_list():
  with pytest.raises(ValueError) as e:
      nums = []
      calculate_average(nums)
  assert str(e.value) == "La lista está vacía"

def test_calculate_average_non_numeric_elements():
  with pytest.raises(TypeError) as e:
    nums = [1, 2, '3', 4, 5]
    calculate_average(nums)
  assert str(e.value) == "La lista contiene elementos no numéricos"

def test_calculate_average_decimal_numbers():
  nums = [0.5, 1.5, 2.5, 3.5, 4.5]
  assert calculate_average(nums) == 2.5

def test_calculate_average_negative_numbers():
  nums = [-1, -2, -3, -4, -5]
  assert calculate_average(nums) == -3.0

def test_calculate_average_single_element():
  nums = [10]
  assert calculate_average(nums) == 10.0

def test_calculate_average_large_list():
  nums = list(range(1, 1001))
  assert calculate_average(nums) == 500.5