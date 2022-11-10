from exercise import multiply_numbers

def test_numbers():
    tests_list = [1, 2, 3]
    rta = multiply_numbers(tests_list)
    assert rta == [2, 4, 6]

def test_negative_numbers():
    tests_list = [0, -1, 2]
    rta = multiply_numbers(tests_list)
    assert rta == [0, -2, 4]

def test_empty_list():
    tests_list = []
    rta = multiply_numbers(tests_list)
    assert rta == []
