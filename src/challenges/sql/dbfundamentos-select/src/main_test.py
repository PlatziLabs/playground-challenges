from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_3_outputs():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  
  assert len(outputs) == 3

def test_select_all():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query0 = outputs[0]
  headers = query0["headers"]
  results = query0["results"]
  
  assert 'id' in headers
  assert 'nombre' in headers
  assert 'profe' in headers
  assert 'n_calificaciones' in headers

  assert len(results) == 3
  assert 1 in results[0].values()
  assert 'Fundamentos de Bases de Datos' in results[0].values()
  assert 'Carlos' in results[1].values()
  assert 150 in results[2].values()

def test_select_count():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query1 = outputs[1]

  assert query1["results"][0]["cantidad"] == 3

def test_select_renames():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query2 = outputs[2]
  headers = query2["headers"]
  results = query2["results"]
  
  assert len(headers) == 3
  assert 'name' in headers
  assert 'teacher' in headers
  assert 'n_reviews' in headers

  assert len(results) == 3
  assert results[0]["n_reviews"] == 580
  assert results[1]["n_reviews"] == 180
  assert results[2]["n_reviews"] == 150

