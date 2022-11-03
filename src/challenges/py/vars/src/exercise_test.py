import unittest.mock

def test_name():
    with unittest.mock.patch('builtins.input', return_value='mock_str'):
        from exercise import name
        assert name == 'mock_str'

def test_age():
    with unittest.mock.patch('builtins.input', return_value='mock_str'):
        from exercise import age
        assert age == 'mock_str'