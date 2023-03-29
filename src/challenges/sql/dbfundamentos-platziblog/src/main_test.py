from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_create_comentarios_table():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = "SELECT name FROM sqlite_schema WHERE type ='table' AND name IS 'comentarios';"
  output = utils.run_test_sql(connection, query)
  results = output["results"]

  assert len(results) == 1
  assert results[0]['name'] == 'comentarios'

def test_select_all_comentarios():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection) # ejemplo con prueba de output
  query = outputs[0]
  headers = query["headers"]
  results = query["results"]

  assert len(headers) == 4
  assert len(results) >= 3
  assert 'id' in headers
  assert 'cuerpo_comentario' in headers
  assert 'usuario_id' in headers
  assert 'post_id' in headers

def test_select_userid_comentarios():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[1]
  headers = query["headers"]
  results = query["results"]

  assert len(headers) == 3
  assert 'post' in headers
  assert 'usuario' in headers
  assert 'comentario' in headers
  
  assert len(results) == 2
  assert results[0]["usuario"] == "israel"
  assert results[1]["usuario"] == "israel"
