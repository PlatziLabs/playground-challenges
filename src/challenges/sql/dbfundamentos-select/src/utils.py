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

def get_json(headers, data):
  array = []
  for x in data:
      iterable = zip(headers, x)
      data_dict = {key: value for key, value in iterable}
      array.append(data_dict)
  return array


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
        results = get_json(headers, execute.fetchall())
        output_dict = { 'headers': headers, 'results': results }
        outputs.append(output_dict)
  except Exception as error:
    print("Error en exercise.sql")
    print(error)
  
  return outputs

def run_test_sql(connection, query_str):
  cursor = connection.cursor()
  output = {}

  try:
    query = sqlparse.parse(query_str)[0]
    execute = cursor.execute(query_str)
    if query.get_type() == "SELECT":
      headers = get_headers(execute.description)
      results = get_json(headers, execute.fetchall())
      output['headers'] = headers
      output['results'] = results
  except Exception as error:
    print("Error en el SQL de los tests")
    print(error)
  
  return output
