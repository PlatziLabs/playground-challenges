from importlib import reload, import_module
import pytest
import shutil

from main import process_pay
from card import Card
from pay import Pay
from paypal import PayPal 
from cash import Cash

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_paypal_inherits_from_pay():
	rta = issubclass(PayPal, Pay)
	assert rta is True

def test_card_inherits_from_pay():
	rta = issubclass(Card, Pay)
	assert rta is True

def test_cash_inherits_from_pay():
	rta = issubclass(Cash, Pay)
	assert rta is True

def test_pay_make_pay():
	rta = Pay().make_pay(100)
	assert rta == {
		"realized": True,
		"quantity": 100
	}

def test_paypal_make_pay():
	rta = PayPal("test@mail.com").make_pay(135)
	assert rta == {
		"realized": True,
		"quantity": 135,
		"platform": "PayPal",
		"email": "test@mail.com"
	}

def test_card_make_pay():
	rta = Card("4913478952471122").make_pay(255)
	assert rta == {
		"realized": True,
		"quantity": 255,
		"last_card_numbers": "1122"
	}

def test_card_make_pay_raises_error():
	rta = Card(4913952471122)
	with pytest.raises(Exception):
		rta.make_pay(122)

def test_processPay():
	cash = Cash()
	card = Card("4913478952471122")
	paypal = PayPal("test@mail.com")

	assert process_pay(cash, 200) == {
		"realized": True,
		"quantity": 200
	}
	assert process_pay(card, 100) == {
		"realized": True,
		"quantity": 100,
		"last_card_numbers": "1122"
	}
	assert process_pay(paypal, 300) == {
		"realized": True,
		"quantity": 300,
		"platform": "PayPal",
		"email": "test@mail.com"
	}