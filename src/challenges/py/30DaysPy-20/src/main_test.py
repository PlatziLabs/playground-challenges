from main import User
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_add_friends():
	user1 = User("Juan", 20)
	user2 = User("Maria", 25)
	user1.addFriend(user2)
	assert user1._friends == [user2]


def test_send_messages():
	user1 = User("Juan", 20)
	user2 = User("Maria", 25)
	user1.addFriend(user2)
	user1.sendMessage("Hola, Maria!", user2)
	assert user1.showMessages() == ["Hola, Maria!"]
	assert user2.showMessages() == ["Hola, Maria!"]


def test_return_name():
	user1 = User("Juan", 20)
	assert user1.name == "Juan"


def test_change_name():
	user1 = User("Juan", 20)
	user1.name = "Pepito"
	assert user1.name == "Pepito"


def test_return_age():
	user1 = User("Juan", 20)
	assert user1.age == 20


def test_change_age():
	user1 = User("Juan", 20)
	user1.age = 25
	assert user1.age == 25
