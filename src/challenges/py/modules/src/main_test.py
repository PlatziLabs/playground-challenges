from main import calc_total
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_case_1():
    module = reload_module('main')
    tests_list = [
        {
            "customer_name": "Nicolas",
            "total": 100,
            "delivered": True,
        },
        {
            "customer_name": "Zulema",
            "total": 120,
            "delivered": False,
        },
        {
            "customer_name": "Santiago",
            "total": 20,
            "delivered": False,
        }
    ]
    rta = module.calc_total(tests_list)
    assert rta == 240

def test_case_2():
    module = reload_module('main')
    tests_list = [
        {
            "customer_name": "Nicolas",
            "total": 2,
            "delivered": True,
        },
        {
            "customer_name": "Zulema",
            "total": 8,
            "delivered": False,
        },
        {
            "customer_name": "Santiago",
            "total": 1,
            "delivered": False,
        }
    ]
    rta = module.calc_total(tests_list)
    assert rta == 11

def test_empty_list():
    module = reload_module('main')
    tests_list = []
    rta = module.calc_total(tests_list)
    assert rta == 0