import sqlite3
import sqlparse

def run_sql(connection):
  cur = connection.cursor()

  try:
    setup = open("./setup.sql", "r").read()
    cur.executescript(setup)
  except sqlite3.OperationalError:
    None

  exercise = open("./exercise.sql", "r").read()
  queries = sqlparse.parse(exercise)
  output = []
  for query in queries:
    if query.get_type() == "SELECT":
      rta = cur.execute(str(query)).fetchall()
      output.append(rta)
    else:
      cur.execute(str(query))
  return output
