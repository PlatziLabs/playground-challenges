from utils import get_output, setup
import sqlite3

def test_1():
    setup()
    outputs = get_output()
    query1 = outputs[0]
    assert query1[0] == 1
    assert query1[1] == 2
    assert query1[2] == 3

def test_2():
    setup()
    connection = sqlite3.connect(":memory:")
    cur = connection.cursor()
    query = "SELECT * FROM persons WHERE name = 'Nico'"
    rta = cur.execute(query).fetchall()
    assert len(rta) == 1