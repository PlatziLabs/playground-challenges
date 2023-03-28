from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_select_headers():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[0]
  headers = query["headers"]

  assert "teacher" in headers
  assert "total_reviews" in headers

def test_select_ordered_teachers():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[0]
  results = query["results"]

  assert len(results) == 3

  assert results[0]["teacher"] == "Silvia"
  assert results[0]["total_reviews"] == 2620

  assert results[1]["teacher"] == "Israel"
  assert results[1]["total_reviews"] == 1550

  assert results[2]["teacher"] == "Leomaris"
  assert results[2]["total_reviews"] == 1500
