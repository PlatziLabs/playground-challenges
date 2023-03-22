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
  outputs = utils.run_sql(connection)
  query1 = outputs[0]
  results = query1["results"]

  assert results[0][0] == 1
  assert results[1][0] == 2
  assert results[2][0] == 3
  assert results[3][0] == 4
  assert len(results) == 4

def test_select_new_insert():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query2 = outputs[1]
  results = query2["results"]

  assert results[0][0] == 4
  assert results[0][1] == "Nath"
  assert len(results) == 1

def test_insert_id():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  cursor = connection.cursor()
  query = "SELECT * FROM persons WHERE id = 4"
  rta = cursor.execute(query).fetchall()

  assert len(rta) == 1
  assert rta[0][0] == 4

def test_insert_name():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  cursor = connection.cursor()
  query = "SELECT name FROM persons WHERE id = 4"
  rta = cursor.execute(query).fetchall()

  assert rta[0][0] == "Nath"
