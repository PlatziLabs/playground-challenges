import sqlite3
import sqlparse

con = sqlite3.connect(":memory:")

cur = con.cursor()
content = open('./setup.sql', 'r').read()
cur.executescript(content)

exercise = open('./exercise.sql', 'r').read()
queries = sqlparse.parse(exercise)
output = []
for query in queries:
    if query.get_type() == 'SELECT':
        rta = cur.execute(str(query)).fetchall()
        output.append(rta)
    else:
        cur.execute(str(query))

rta = output[0]
assert len(rta) == 1

rta = output[1]
assert len(rta) == 7

print(output)