import numpy as np
from main import crear_array

def test_crear_array():
    lista = [1, 2, 3, 4]
    respuesta = crear_array(lista)
    assert isinstance(respuesta, np.ndarray), 'La función no retorna un numpy array.'
    assert np.all(respuesta == lista), 'El array retornado no coincide con la lista original.'

test_crear_array()
