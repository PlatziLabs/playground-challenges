import unittest.mock

def test_name():
    with unittest.mock.patch('builtins.input', return_value='your name'):
        from exercise import name
        assert name == 'your name'

def test_age():
    with unittest.mock.patch('builtins.input', return_value='your age'):
        from exercise import age
        assert age == 'your age'