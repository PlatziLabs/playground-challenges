from main import merge_lists
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_same_length():
    module = reload_module('main')
    nums1 = [1,2,3,0,0,0]
    m = 3
    nums2 = [2,5,6]
    n = 3
    rta = module.merge_lists(nums1, m, nums2, n)
    assert rta == [1,2,2,3,5,6]

def test_different_length():
    module = reload_module('main')
    nums1 = [1,2,3,0,0,0,0]
    m = 3
    nums2 = [-4,2,3,9]
    n = 4
    rta = module.merge_lists(nums1, m, nums2, n)
    assert rta == [-4,1,2,2,3,3,9]
