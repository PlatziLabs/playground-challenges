from exercise import is_even_or_odd

def test_even():
    assert is_even_or_odd(2)  == 'Es par'
    assert is_even_or_odd(-2)  == 'Es par'
    assert is_even_or_odd(4)  == 'Es par'

def test_odd():
    assert is_even_or_odd(1)  == 'Es impar'
    assert is_even_or_odd(3)  == 'Es impar'
    assert is_even_or_odd(-9)  == 'Es impar'