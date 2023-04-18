from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_alter_table():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = 'pragma table_info("asignaturas");'
  output = utils.run_test_sql(connection, query)
  results = output["results"]

  required_columns = ("id", "titulo", "hora_de_entrega")

  assert len(results) == 3
  assert results[0]["name"] in required_columns
  assert results[1]["name"] in required_columns
  assert results[2]["name"] in required_columns
  
  for column in results:
    if (column["name"] == "id"):
      assert column["pk"] == 1
      assert column["notnull"] == 1
      assert column["type"] == "INT"
    if (column["name"] == "titulo"):
      assert column["pk"] == 0
      assert column["notnull"] == 1
      assert column["type"] == "VARCHAR(255)"
    if (column["name"] == "hora_de_entrega"):
      assert column["pk"] == 0
      assert column["notnull"] == 1
      assert column["type"] == "TIMESTAMP"

def test_create_table():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection)

  query = 'pragma table_info("estudiantes");'
  output = utils.run_test_sql(connection, query)
  results = output["results"]

  required_columns = ("id", "nombre", "asignatura_id")

  assert len(results) == 3
  assert results[0]["name"] in required_columns
  assert results[1]["name"] in required_columns
  assert results[2]["name"] in required_columns

  for column in results:
    if (column["name"] == "id"):
      assert column["pk"] == 1
      assert column["notnull"] == 1
      assert column["type"] == "INT"
    if (column["name"] == "nombre"):
      assert column["pk"] == 0
      assert column["notnull"] == 1
      assert column["type"] == "VARCHAR(255)"
    if (column["name"] == "asignatura_id"):
      assert column["pk"] == 0
      assert column["notnull"] == 1
      assert column["type"] == "INT"
