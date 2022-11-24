from exercise import remove_repeated_countries

def test_many_countries():
    am = {"MX", "COL", "ARG", "USA"}
    northAm = {"USA", "CANADA"}
    centralAm = {"MX", "GT", "BZ"}
    southAm = {"COL", "BZ", "ARG"}
    rta = remove_repeated_countries(am, northAm, centralAm, southAm)
    assert rta == {'ARG', 'USA', 'CANADA', 'GT', 'COL', 'MX', 'BZ'}

def test_order():
    am = {"BOL"}
    northAm = {"CA"}
    centralAm = {"MX"}
    southAm = {"COL"}
    rta = remove_repeated_countries(am, northAm, centralAm, southAm)
    assert rta == {'COL', 'CA', 'BOL', 'MX'}

def test_empty_countries():
    rta = remove_repeated_countries({""}, {""}, {""}, {""})
    assert rta == {""}