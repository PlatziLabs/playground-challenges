from importlib import reload, import_module
import sqlite3
import shutil
import utils


def reload_module(name):
    module = import_module(name)
    shutil.rmtree("__pycache__", ignore_errors=True)
    reload(module)
    return module


def test_select_from_table_students():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    output = utils.run_sql(connection)
    query0 = output[0]
    headers = query0["headers"]
    results = query0["results"]
    assert len(results) == 5
    assert headers == [
        "id",
        "nombre",
        "apellido",
        "edad",
        "correo_electronico",
        "telefono",
    ]


def test_insert_into_table_students():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    utils.run_sql(connection)
    query = """
    SELECT nombre, apellido, edad, correo_electronico, telefono FROM students WHERE nombre = 'Alexis'
    and apellido = 'Araujo' and edad = 33 and correo_electronico = 'alexis@gmail.com' and telefono = '777-1234';
    """
    output = utils.run_test_sql(connection, query)
    results = output["results"]
    assert len(results) == 1
    keys, values = zip(*results[0].items())
    assert keys == (
        "nombre",
        "apellido",
        "edad",
        "correo_electronico",
        "telefono",
    )
    assert values == (
        "Alexis",
        "Araujo",
        33,
        "alexis@gmail.com",
        "777-1234",
    )


def test_delete_from_table_students_where():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    outputs = utils.run_sql(connection)
    outputs = {output["deleted"]: output for output in outputs if "deleted" in output}
    assert "true" in outputs
    query = """
    SELECT * FROM students
    """
    output = utils.run_test_sql(connection, query)
    results = output["results"]
    ids = [result["id"] for result in results]
    assert 1 not in ids


def test_update_table_students_where():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    outputs = utils.run_sql(connection)
    outputs = {output["updated"]: output for output in outputs if "updated" in output}
    assert "true" in outputs
