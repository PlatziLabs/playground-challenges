from main import ContactList
from importlib import reload, import_module
import shutil

def test_insert_new_contact():
	contactList = ContactList(10)
	contactList.insert("Mr michi", "123-456-7890")
	result = [["Mr michi", "123-456-7890"]]
	rta = contactList.retrieveAll()
	assert rta == result

def test_insert_multiple_contacts_same_index():
	contactList = ContactList(10)
	contactList.insert("Mr Michi", "123-456-3456")
	contactList.insert("Mr firulais", "555-555-5556")
	result = [
		["Mr Michi", "123-456-3456"],
		["Mr firulais", "555-555-5556"]
	]
	rta = contactList.retrieveAll()
	assert rta == result

def test_get_phone_number_of_contact():
	contactList = ContactList(10)
	contactList.insert("Mr Michi", "123-456-7890")
	expected = "123-456-7890"
	rta = contactList.get("Mr Michi")
	assert rta == expected

def test_return_null_if_contact_not_found():
	contactList = ContactList(10)
	expected = None
	rta = contactList.get("John Doe")
	assert rta == expected

def test_return_empty_array_if_no_contacts():
	contactList = ContactList(10)
	expected = []
	rta = contactList.retrieveAll()
	assert rta == expected

def test_return_array_with_all_contacts():
	contactList = ContactList(10)
	contactList.insert("Mr Michi", "123-456-7890")
	contactList.insert("Mr firulais", "555-555-5556")
	expected = [
		["Mr Michi", "123-456-7890"],
		["Mr firulais", "555-555-5556"]
	]
	rta = contactList.retrieveAll()
	assert rta == expected

def test_delete_contact_from_hash_table():
	contactList = ContactList(10)
	contactList.insert("Mr firulais", "555-555-5556")
	contactList.delete("Mr firulais")
	expected = []
	rta = contactList.retrieveAll()
	assert rta == expected

def test_return_null_if_contact_not_found_when_deleting():
	contactList = ContactList(10)
	contactList.insert("Mr firulais", "555-555-5556")
	expected = None
	rta = contactList.delete("Mr Michi")
	assert rta == expected