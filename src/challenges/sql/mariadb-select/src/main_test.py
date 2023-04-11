from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_select_longitud_km():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[0]
  results = query["results"]

  assert len(results) == 3
  assert results[0]["estacion"] == "Tlahuac"
  assert results[1]["estacion"] == "Cuatro Caminos"
  assert results[2]["estacion"] == "Mixcoac"

def test_select_newest():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[1]
  results = query["results"]

  assert len(results) == 2
  assert results[0]["estacion"] == "Tlahuac"
  assert results[1]["estacion"] == "Mixcoac"

def test_select_average():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection)
  query = outputs[2]
  results = query["results"]

  assert len(results) == 1
  assert results[0]["longitud_promedio"] == 9.5575
