from exercise import filter_by_length

def test_words():
    tests_list = ['amor', 'sol', 'piedra', 'día']
    rta = filter_by_length(tests_list)
    assert rta == ['amor', 'piedra']

def test_empty():
    tests_list = ['aa', 'a', 'bb', 'cc']
    rta = filter_by_length(tests_list)
    assert rta == []