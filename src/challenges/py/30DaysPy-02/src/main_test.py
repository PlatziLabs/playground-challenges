from main import is_leap_year

def test_leap_years():
    assert is_leap_year(2000) == True
    assert is_leap_year(2004) == True
    assert is_leap_year(2020) == True
    assert is_leap_year(2024) == True

def test_decimals_years():
    assert is_leap_year(2000.5) == False
    assert is_leap_year(1984.25) == False
    assert is_leap_year(2024.3521) == False

def test_non_leap_years():
    assert is_leap_year(1700) == False
    assert is_leap_year(1800) == False
    assert is_leap_year(1900) == False
    assert is_leap_year(2001) == False
    assert is_leap_year(2019) == False
    assert is_leap_year(2022) == False

def test_negative_years():
    assert is_leap_year(-2024) == False