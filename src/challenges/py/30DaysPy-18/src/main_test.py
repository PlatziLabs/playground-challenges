import pytest
from main import Car
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_car_initial_data():
  toyota = Car("Toyota", "Corolla", 2022, 0)
  assert toyota.brand == "Toyota"
  assert toyota.model == "Corolla"
  assert toyota.year == 2022
  assert toyota.mileage == 0

def test_turn_on_car():
  toyota = Car("Toyota", "Corolla", 2022, 0)
  toyota.turnOn()
  assert toyota.state == True

def test_turn_off_car():
  toyota = Car("Toyota", "Corolla", 2022, 0)
  toyota.turnOn()
  toyota.turnOff()
  assert toyota.state == False

def test_increase_mileage():
  toyota = Car("Toyota", "Corolla", 2022, 0)
  toyota.turnOn()
  toyota.drive(100)
  assert toyota.mileage == 100

def test_no_increase_mileage_when_car_is_off():
  toyota = Car("Toyota", "Corolla", 2022, 0)
  toyota.turnOff()
  with pytest.raises(Exception, match="El auto está apagado"):
    toyota.drive(100)
  assert toyota.mileage == 0

def test_throw_error_when_car_is_off():
  toyota = Car("Toyota", "Corolla", 2022, 0)
  toyota.turnOff()
  with pytest.raises(Exception, match="El auto está apagado"):
    toyota.drive(100)