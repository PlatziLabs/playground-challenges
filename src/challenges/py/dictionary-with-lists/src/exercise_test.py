from exercise import dictionary_with_lists


def test_names_dictionary():
    solution = {
        'school': "Platzi",
        'names': ["Pepe", "Luis"],
        'first_student': "Pepe",
        'last_student': "Luis",
        'count': 2
    }
    tests_names = ["Pepe", "Luis"]
    rta = dictionary_with_lists(tests_names)
    assert rta == solution


def test_with_one_name():
    solution = {
        'school': "Platzi",
        'names': ["Pedro"],
        'first_student': "Pedro",
        'last_student': "Pedro",
        'count': 1
    }
    tests_names = ["Pedro"]
    rta = dictionary_with_lists(tests_names)
    assert rta == solution


def test_with_many_names():
    solution = {
        'school': "Platzi",
        'names': ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"],
        'first_student': "Pedro",
        'last_student': "Saul",
        'count': 6
    }
    tests_names = ["Pedro", "Pepe", "Luis", "Enrique", "Juan", "Saul"]
    rta = dictionary_with_lists(tests_names)
    assert rta == solution
