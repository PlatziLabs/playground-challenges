import numpy as np
from main import array_slicing

def test_array_slicing():
    input_array = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    result = array_slicing(input_array, 2, 6)
    assert np.array_equal(result, np.array([3, 4, 5, 6])), 'El slicing no se realizó correctamente'


test_array_slicing()