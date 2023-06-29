from main import filter_user_messages
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module
def sample_messages():
	return [
		{'sender': 'Alice', 'content': 'Hola, ¿cómo estás?'},
		{'sender': 'Bob', 'content': '¡Bien, gracias!'},
		{'sender': 'Alice', 'content': '¿Quieres tomar un café?'},
		{'sender': 'Charlie', 'content': 'Hola a todos.'},
		{'sender': 'Alice', 'content': 'Nos vemos luego.'}
	]

def test_filter_user_messages_1():
	username = 'Alice'
	filtered = filter_user_messages(sample_messages(), username)
	expected = [
		{'sender': 'Alice', 'content': 'Hola, ¿cómo estás?'},
		{'sender': 'Alice', 'content': '¿Quieres tomar un café?'},
		{'sender': 'Alice', 'content': 'Nos vemos luego.'}
	]
	assert filtered == expected

def test_filter_user_messages_2():
	username = 'Bob'
	filtered = filter_user_messages(sample_messages(), username)
	expected = [
		{'sender': 'Bob', 'content': '¡Bien, gracias!'}
	]
	assert filtered == expected

def test_filter_user_messages_3():
	username = 'Charlie'
	filtered = filter_user_messages(sample_messages(), username)
	expected = [
		{'sender': 'Charlie', 'content': 'Hola a todos.'}
	]
	assert filtered == expected

def test_filter_user_messages_4():
	username = 'David'  
	filtered = filter_user_messages(sample_messages(), username)
	expected = []
	assert filtered == expected

def test_filter_user_messages_5():
	messages = []
	username = 'Alice'
	filtered = filter_user_messages(messages, username)
	expected = []
	assert filtered == expected