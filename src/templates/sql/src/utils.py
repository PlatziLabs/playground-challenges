from importlib import reload, import_module
import shutil
import sqlite3
import sqlparse


def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def setup():
    connection = sqlite3.connect(":memory:")
    cur = connection.cursor()
    content = open('./setup.sql', 'r').read()
    cur.executescript(content)

def get_output():
    connection = sqlite3.connect(":memory:")
    cur = connection.cursor()
    exercise = open('./exercise.sql', 'r').read()
    queries = sqlparse.parse(exercise)
    output = []
    for query in queries:
        if query.get_type() == 'SELECT':
            rta = cur.execute(str(query)).fetchall()
            output.append(rta)
        else:
            cur.execute(str(query))
    return output