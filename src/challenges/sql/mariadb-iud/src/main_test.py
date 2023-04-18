from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_delete_line5():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT * FROM lines WHERE id=5;"
  output = utils.run_test_sql(connection, query)
  results = output["results"]

  assert len(results) == 0

def test_update_line1():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT * FROM lines WHERE id=1;"
  output = utils.run_test_sql(connection, query)
  results = output["results"]

  assert len(results) == 1
  assert results[0]["name"] == "Linea 1"

def test_insert_line7():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT * FROM lines WHERE id=7;"
  output = utils.run_test_sql(connection, query)
  results = output["results"]

  assert len(results) == 1
  assert results[0]["name"] == "Nueva Linea 7"
  assert results[0]["color"] == "Naranja"

def test_total_lines():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT * FROM lines;"
  output = utils.run_test_sql(connection, query)
  results = output["results"]

  assert len(results) == 6
