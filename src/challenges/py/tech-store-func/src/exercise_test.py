from exercise import message_creator

def test_computadora():
    article = "computadora"
    rta = message_creator(article)
    assert rta == "Con mi computadora puedo programar usando Python"

def test_celular():
    article = "celular"
    rta = message_creator(article)
    assert rta == "En mi celular puedo aprender usando la app de Platzi"

def test_cable():
    article = "cable"
    rta = message_creator(article)
    assert rta == "should return message with cable"

def test_default():
    article = "otro"
    rta = message_creator(article)
    assert rta == "Artículo no encontrado"
