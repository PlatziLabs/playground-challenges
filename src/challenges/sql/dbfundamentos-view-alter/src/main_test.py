from importlib import reload, import_module
import sqlite3
import shutil


def reload_module(name):
    module = import_module(name)
    shutil.rmtree("__pycache__", ignore_errors=True)
    reload(module)
    return module


def test_select_view_select_outputs():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    outputs = utils.run_sql(connection)  # ejemplo con prueba de output
    query1 = outputs[0]
    results = query1["results"]
    assert results[0]["person_id"] == 4
    assert results[0]["last_name"] == "Black"
    assert results[0]["first_name"] == "Jack"
    assert len(results) == 1


def test_check_view_exists():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    utils.run_sql(connection)
    query = (
        "SELECT * FROM sqlite_master WHERE type='view' AND name='v_madrid_customers'"
    )
    output = utils.run_test_sql(connection, query)
    results = output["results"]
    assert results[0]["name"] == "v_madrid_customers"


def test_alter_table_add_column():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    utils.run_sql(connection)
    validate_table_add_column = "pragma table_info(people);"
    output = utils.run_test_sql(connection, validate_table_add_column)
    assert len(output["results"]) >= 1
    results = output["results"]
    result_add_column = results[4]
    assert result_add_column["name"] == "date_of_birth"
    assert result_add_column["type"] == "DATE"


def test_alter_table_drop_column():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    utils.run_sql(connection)
    validate_table_drop_column = "pragma table_info(people);"
    output = utils.run_test_sql(connection, validate_table_drop_column)
    assert len(output["results"]) >= 1
    results = output["results"]
    result_drop_column = results[3]
    assert "address" not in result_drop_column["name"]
