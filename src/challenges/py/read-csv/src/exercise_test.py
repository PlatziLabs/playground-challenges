from exercise import read_csv
from importlib import reload, import_module
import shutil
from unittest.mock import patch, mock_open

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_case_1():
    in_mem_csv = "A,10\nB,20\nC,30\nD,40\n"
    with patch("builtins.open", mock_open(read_data=in_mem_csv)):
        module = reload_module('exercise')
        rta = module.read_csv('./data.csv')
        assert rta == 100

def test_case_2():
    in_mem_csv = "A,10\nB,10\nC,10\nD,10\n"
    with patch("builtins.open", mock_open(read_data=in_mem_csv)):
        module = reload_module('exercise')
        rta = module.read_csv('./data.csv')
        assert rta == 40
        
   