from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_vars():
    module = reload_module('main')
    text = module.text
    assert isinstance(text, int)