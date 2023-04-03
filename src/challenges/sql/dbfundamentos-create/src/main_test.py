from importlib import reload, import_module
import sqlite3
import shutil


def reload_module(name):
    module = import_module(name)
    shutil.rmtree("__pycache__", ignore_errors=True)
    reload(module)
    return module


def test_create_table_outputs():
    connection = sqlite3.connect(":memory:")
    utils = reload_module("utils")
    utils.run_sql(connection)

    query = "pragma table_info('people');"
    output = utils.run_test_sql(connection, query)
    assert len(output["results"]) == 5
    results_person = output["results"][0]
    results_last_name = output["results"][1]
    results_first_name = output["results"][2]
    results_address = output["results"][3]
    results_city = output["results"][4]
    assert results_person["name"] == "person_id"
    assert results_person["type"] == "INTEGER"
    assert results_person["notnull"] == 1
    assert results_last_name["name"] == "last_name"
    assert results_last_name["type"] == "VARCHAR(255)"
    assert results_last_name["notnull"] == 0
    assert results_first_name["name"] == "first_name"
    assert results_first_name["type"] == "VARCHAR(255)"
    assert results_first_name["notnull"] == 0
    assert results_address["name"] == "address"
    assert results_address["type"] == "VARCHAR(255)"
    assert results_address["notnull"] == 0
    assert results_city["name"] == "city"
    assert results_city["type"] == "VARCHAR(255)"
    assert results_city["notnull"] == 0
