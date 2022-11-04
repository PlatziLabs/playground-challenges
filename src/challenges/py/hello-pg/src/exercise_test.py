def test_print_hello(capfd):
    import exercise
    expected_str = "Te doy la bienvenida al Coding Playground\nMi primer print\n30\n"
    out, error = capfd.readouterr()
    assert out  == expected_str