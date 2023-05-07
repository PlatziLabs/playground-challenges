from main import get_packages_info
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_packages_weight():
  test_packages = [
    (1, 20, "Mexico"),
    (2, 15.5, "Colombia"),
    (3, 30, "Mexico"),
    (4, 12, "Argentina"),
    (5, 8.2, "Colombia"),
    (6, 25, "Mexico"),
    (7, 18.7, "Argentina"),
    (8, 5, "Colombia"),
    (9, 22.3, "Argentina"),
    (10, 14.8, "Colombia")
  ]
  
  rta = get_packages_info(test_packages)
  rta = rta["total_weight"]
  
  assert rta == 171.50

def test_packages_destinations():
  test_packages = [
    (1, 20, "Mexico"),
    (2, 15.5, "Colombia"),
    (3, 30, "Mexico"),
    (4, 12, "Argentina"),
    (5, 8.2, "Colombia"),
    (6, 25, "Mexico"),
    (7, 18.7, "Argentina"),
    (8, 5, "Colombia"),
    (9, 22.3, "Argentina"),
    (10, 14.8, "Colombia")
  ]
  
  rta = get_packages_info(test_packages)
  rta = rta["destinations"]  
    
  assert rta == {
    "Mexico": 3,
    "Colombia": 4,
    "Argentina": 3
  }
  
def test_empty_list():
  test_packages = []
  rta = get_packages_info(test_packages)
  assert rta["total_weight"] == 0
  assert rta["destinations"] == {}

def test_single_package():
  test_packages = [(1, 10, "Ecuador")]
  rta = get_packages_info(test_packages)
  assert rta["total_weight"] == 10
  assert rta["destinations"] == {"Ecuador": 1}

def test_packages_with_same_weight():
  test_packages = [(1, 20, "Mexico"), (2, 20, "Bolivia"), (3, 20, "Argentina")]
  rta = get_packages_info(test_packages)
  assert rta["total_weight"] == 60
  assert rta["destinations"] == {"Mexico": 1, "Bolivia": 1, "Argentina": 1}

def test_packages_with_same_destination():
  test_packages = [(1, 10, "Mexico"), (2, 20, "Mexico"), (3, 30, "Mexico")]
  rta = get_packages_info(test_packages)
  assert rta["total_weight"] == 60
  assert rta["destinations"] == {"Mexico": 3}