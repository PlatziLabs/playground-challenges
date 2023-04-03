from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_select_three_outputs():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)

  assert len(outputs) == 3

def test_select_sum():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[0]
  results = query["results"][0]
  value = [*results.values()][0]
  assert value == 4

def test_select_division():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[1]
  results = query["results"][0]
  value = [*results.values()][0]
  assert value == 6

def test_select_text():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[2]
  results = query["results"][0]
  value = [*results.values()][0]
  assert value.lower() == "esto es una sentencia select"
