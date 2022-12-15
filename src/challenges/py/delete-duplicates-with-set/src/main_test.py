from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_many_countries(capfd):
    reload_module('main')
    # "{'ARG', 'USA', 'CANADA', 'GT', 'COL', 'MX', 'BZ'}\n"
    expected_list = ['ARG', 'BZ', 'CANADA', 'COL', 'GT', 'MX', 'USA']
    out, error = capfd.readouterr()

    out = out.replace('\n', '')
    out = out.replace('{', '')
    out = out.replace('}', '')
    out = out.replace("'", '')
    out = out.replace(" ", '')

    lists = out.split(',')
    lists.sort()
    assert lists == expected_list