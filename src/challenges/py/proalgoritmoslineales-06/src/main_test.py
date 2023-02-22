from main import kClosest
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_1_closest_point():
    module = reload_module('main')
    tests_list = [[1,3], [3,4], [5,6]]
    rta = module.kClosest(tests_list, 1)
    assert [1, 3] in rta and [3,4] not in rta and [5,6] not in rta

def test_2_closest_points():
    module = reload_module('main')
    tests_list = [[13,-8], [1,20], [-5,5]]
    rta = module.kClosest(tests_list, 2)
    assert [-5, 5] in rta and [13, -8] in rta and [1,20] not in rta

def test_2_surprise_closest_points():
    module = reload_module('main')
    tests_list = [[20,-18], [5,25], [-15,50]]
    rta = module.kClosest(tests_list, 2)
    assert [5, 25] in rta and [20, -18] in rta and [-15,50] not in rta

def test_3_closest_points():
    module = reload_module('main')
    tests_list = [[250,250], [499,1], [-50,450], [390,120]]
    rta = module.kClosest(tests_list, 3)
    assert [250,250] in rta and [390,120] in rta and [-50,450] in rta and [499,1] not in rta

