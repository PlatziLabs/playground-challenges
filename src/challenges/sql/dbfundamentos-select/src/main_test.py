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
  body = query0["body"]
  
  assert headers == ['id', 'nombre', 'profe', 'n_calificaciones']
  assert len(body) == 3
  assert body[0] == [1, 'Fundamentos de Bases de Datos', 'Israel', 580]
  assert body[1] == [2, 'MySQL y MariaDB', 'Carlos', 180]
  assert body[2] == [3, 'PostgreSQL', 'Oswaldo', 150]

def test_select_count():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query1 = outputs[1]

  assert query1["headers"][0] == 'cantidad'
  assert query1["body"][0] == [3]

def test_select_renames():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query2 = outputs[2]
  headers = query2["headers"]
  body = query2["body"]
  
  assert len(headers) == 3
  assert headers[0] == 'name'
  assert headers[1] == 'teacher'
  assert headers[2] == 'n_reviews'
  assert len(body) == 3
  assert body[0][2] == 580
  assert body[1][2] == 180
  assert body[2][2] == 150

