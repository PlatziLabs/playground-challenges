from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_select_all_outputs():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection) # ejemplo con prueba de output
  query1 = outputs[0]
  results = query1["results"]

  assert results[0]["id"] == 1
  assert results[1]["id"] == 2
  assert results[2]["id"] == 3
  assert results[3]["id"] == 4
  assert len(results) == 4

def test_select_new_insert():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query2 = outputs[1]
  results = query2["results"]

  assert results[0]["id"] == 4
  assert results[0]["name"] == "Nath"
  assert len(results) == 1

def test_insert_id():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT * FROM persons WHERE id = 4"
  output = utils.run_test_sql(connection, query) # ejemplo con prueba de query
  headers = output["headers"]
  results = output["results"]

  assert len(results) == 1
  assert results[0]["id"] == 4

def test_insert_name():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT name FROM persons WHERE id = 4"
  output = utils.run_test_sql(connection, query)
  headers = output["headers"]
  results = output["results"]

  assert results[0]["name"] == "Nath"
