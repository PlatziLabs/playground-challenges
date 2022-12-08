from exercise import counter_numbers

def test_case_1():
    tests_list = [1, 2, 2, 3, 3, 3]
    rta = counter_numbers(tests_list)
    assert rta == {
      '1': 1,
      '2': 2,
      '3': 3,
    }

def test_case_2():
    tests_list = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
    rta = counter_numbers(tests_list)
    assert rta == {
      '1': 2,
      '2': 2,
      '4': 2,
      '45': 1,
      '-3': 1,
      '-1': 2
    }

def test_case_3():
    tests_list = []
    rta = counter_numbers(tests_list)
    assert rta == {}