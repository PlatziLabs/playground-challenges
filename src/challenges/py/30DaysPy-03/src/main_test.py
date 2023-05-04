from main import print_triangle
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_triangle_of_asterisks():
    size = 5
    character = "*"
    expected_output = "    *\n   ***\n  *****\n *******\n*********"
    rta = print_triangle(size, character)
    assert rta == expected_output
        
def test_triangle_of_dollars():
    size = 6
    character = "$"
    expected_output = "     $\n    $$$\n   $$$$$\n  $$$$$$$\n $$$$$$$$$\n$$$$$$$$$$$"
    rta = print_triangle(size, character)
    assert rta == expected_output
    
def test_triangle_of_percentages():
    size = 3
    character = "%"
    expected_output = "  %\n %%%\n%%%%%"
    rta = print_triangle(size, character)
    assert rta == expected_output
    