from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_many_countries(capfd):
    reload_module('main')
    str_v1 = "v1 => [16, 10, 34]"
    str_v2 = "v2 => [16, 10, 34]"
    out, error = capfd.readouterr()
    assert str_v1 in out and str_v2 in out