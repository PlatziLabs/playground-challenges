from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_outputs_len():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)

  assert len(outputs) == 1

def test_select_join():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[0]
  headers = query["headers"]
  results = query["results"]

  assert headers
  assert 'id' in headers
  assert 'name' in headers
  assert 'teacher_id' in headers

  assert len(results) == 4

  id_list = (100, 260, 350, 749)
  teacher_name_list = ("Israel", "Silvia", "Leomaris", "Nico")
  for course in results:
    assert course['id'] in id_list
    assert course['teacher_name'] in teacher_name_list
