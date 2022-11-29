def test_print(capfd):
    import exercise
    expected_str = "Hola mi nombre es Juana Perz, tengo 10 años y en 10 años tendré 20 años\n"
    out, error = capfd.readouterr()
    assert out  == expected_str