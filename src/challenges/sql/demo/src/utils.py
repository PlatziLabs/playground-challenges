import sqlite3
import sqlparse

def get_headers(desc):
  headers = []
  for item in desc:
    headers.append(item[0])
  return headers

def get_results(data):
  body = []
  for item in data:
    body.append(list(item))
  return body

def run_sql(connection):
  cursor = connection.cursor()
  outputs = []

  try:
    setup = open("./setup.sql", "r").read()
    cursor.executescript(setup)
  except sqlite3.OperationalError as error:
    print("Error en setup.sql")
    print(error)

  try:
    exercise = open("./exercise.sql", "r").read()
    formated = sqlparse.format(exercise, strip_comments=True).strip()
    for query in sqlparse.parse(formated):
      execute = cursor.execute(str(query))
      if query.get_type() == "SELECT":
        headers = get_headers(execute.description)
        results = get_results(execute.fetchall())
        output_dict = { 'headers': headers, 'results': results }
        outputs.append(output_dict)
  except Exception as error:
    print("Error en exercise.sql")
    print(error)
  
  return outputs
