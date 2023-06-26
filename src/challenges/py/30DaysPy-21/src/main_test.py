from main import Animal, Mammal, Dog
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_animal_getInfo():
  bird = Animal("pepe", 1, "bird")
  rta = bird.getInfo()
  assert rta == {
    "name": "pepe",
    "age": 1,
    "specie": "bird"
  }

def test_mammal_getInfo():
  hippo = Mammal("bartolo", 3, "hippo", False)
  rta = hippo.getInfo()
  assert rta == {
    "name": "bartolo",
    "age": 3,
    "specie": "hippo",
    "hasFur": False
  }

def test_dog_getInfo():
  dog = Dog("fido", 4,  "pastor aleman")
  rta = dog.getInfo()
  assert rta == {
    "name": "fido",
    "age": 4,
    "specie": "dog",
    "hasFur": True,
    "breed": "pastor aleman"
  }

def test_mammal_inherits_from_animal():
  mammal = Mammal("test", 1, "test", False)
  rta = isinstance(mammal, Animal)
  assert rta is True

def test_dog_inherits_from_mammal():
  dog = Dog("Firulais", 3, "pitbull")
  rta = isinstance(dog, Mammal)
  assert rta is True

def test_dog_bark():
  dog = Dog("Firulais", 3, "pitbull")
  rta = dog.bark()
  assert rta == "woof!"
