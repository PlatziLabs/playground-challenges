from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_where_at_least_1_review():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[0]
  results = query["results"]

  assert len(results) == 4
  assert results[0]["id"] == 100
  assert results[1]["id"] == 200
  assert results[2]["id"] == 260
  assert results[3]["id"] == 749

def test_where_max_100_reviews():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[1]
  results = query["results"]

  assert len(results) == 2
  assert results[0]["id"] == 100
  assert results[1]["id"] == 260

def test_where_name_like():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[2]
  results = query["results"]

  assert len(results) == 2
  assert results[0]["name"] == "Fundamentos de SQL y Bases de Datos"
  assert results[1]["name"] == "Curso de MySQL y MariaDB"
