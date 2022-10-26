from .exercise import multiply_numbers

def test_with_list():
    assert multiply_numbers([1,2]) == [2,4]