from utils import get_output, setup, connection

setup()
outputs = get_output()

def test_select_outputs():
    query1 = outputs[0]
    assert query1[0][0] == 1
    assert query1[1][0] == 2
    assert query1[2][0] == 3
    assert query1[3][0] == 4
    assert len(query1) == 4

def test_insert_complete():
    cursor = connection.cursor()
    query = "SELECT * FROM persons WHERE id = 4"
    rta = cursor.execute(query).fetchall()
    assert len(rta) == 1
    assert rta[0][0] == 4
    assert rta[0][1] == 'Nath'

def test_insert_prop():
    cursor = connection.cursor()
    query = "SELECT name FROM persons WHERE id = 4"
    rta = cursor.execute(query).fetchall()
    assert rta[0][0] == 'Nath'
