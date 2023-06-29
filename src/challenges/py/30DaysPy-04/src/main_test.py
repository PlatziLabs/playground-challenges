from main import find_famous_cat
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_cats():
  cats = [
    {
      "name": "Luna",
      "followers": [500, 200, 300]
    },
    {
      "name": "Michi",
      "followers": [100, 500]
    }
  ]

  rta = find_famous_cat(cats)
  assert rta == ["Luna"]

def test_various_cats():
  cats = [
    {
      "name": "Mimi",
      "followers": [320, 120, 70],
    },
    {
      "name": "Milo",
      "followers": [400, 300, 100, 200],
    },
    {
      "name": "Gizmo",
      "followers": [250, 750],
    },
  ]
  
  rta = find_famous_cat(cats)
  assert rta == ["Milo", "Gizmo"]
  
def test_zero_followers():
  cats = [
    {
      "name": "Luna",
      "followers": [0],
    },
    {
      "name": "Michi",
      "followers": [0],
    },
    {
      "name": "Simba",
      "followers": [0],
    },
  ]
  
  rta = find_famous_cat(cats)
  assert rta == ["Luna", "Michi", "Simba"]
  
def test_cat_with_one_value():
  cats = [
    {
      "name": "Mimi",
      "followers": [1000000],
    },
    {
      "name": "Michi",
      "followers": [250, 2500, 30000],
    },
    {
      "name": "Simba",
      "followers": [50, 20, 213],
    },
  ]
  
  rta = find_famous_cat(cats)
  assert rta == ["Mimi"]