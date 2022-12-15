from main import message_creator
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_computadora():
    module = reload_module('main')
    article = "computadora"
    rta = module.message_creator(article)
    assert rta == "Con mi computadora puedo programar usando Python"

def test_celular():
    module = reload_module('main')
    article = "celular"
    rta = module.message_creator(article)
    assert rta == "En mi celular puedo aprender usando la app de Platzi"

def test_cable():
    module = reload_module('main')
    article = "cable"
    rta = module.message_creator(article)
    assert rta == "¡Hay un cable en mi bota!"

def test_default():
    module = reload_module('main')
    article = "otro"
    rta = module.message_creator(article)
    assert rta == "Artículo no encontrado"
