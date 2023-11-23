from importlib import reload, import_module
import shutil
import re

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_template(capfd):
    module = reload_module('main')
    out, error = capfd.readouterr()
    regex = r"Hello my name is \w+, I am (\d{1,4}) years old and in 10 years I will be (\d{1,4}) years old"

    match = re.search(regex, out, re.MULTILINE)
    if match and len(match.groups()) == 2:
        age = int(match.group(1))
        total = int(match.group(2))
        assert total == (age + 10)
    else:
        assert False