from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_create_pivot_table():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT name FROM sqlite_schema WHERE type ='table' AND name LIKE 'linea_estaciones';"
  output = utils.run_test_sql(connection, query)
  headers = output["headers"]
  results = output["results"]

  assert len(results) == 1
  assert results[0]["name"] == "linea_estaciones"

def test_insert_5_stations_per_line():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT linea_id FROM linea_estaciones WHERE linea_id = 1;"
  output1 = utils.run_test_sql(connection, query)
  results1 = output1["results"]
  query = "SELECT linea_id FROM linea_estaciones WHERE linea_id = 2;"
  output2 = utils.run_test_sql(connection, query)
  results2 = output2["results"]
  query = "SELECT linea_id FROM linea_estaciones WHERE linea_id = 3;"
  output3 = utils.run_test_sql(connection, query)
  results3 = output3["results"]

  assert len(results1) == 5
  assert len(results2) == 5
  assert len(results3) == 5
  
