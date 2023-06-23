from main import Article, Service, Cart
from product import Product
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module


def test_article_instance_of_product():
  book = Article("Libro", 100, 2)
  assert isinstance(book, Product) is True

def test_service_instance_of_product():
  course = Service("Curso", 120, 1)
  assert isinstance(course, Product) is True

def test_cart_not_instance_of_product():
  cart = Cart()
  assert isinstance(cart, Product) is False

def test_add_product_to_cart():
  cart = Cart()
  book = Article("Libro", 100, 2)
  cart.addProduct(book)
  currentProducts = cart.getProducts()
  assert len(currentProducts) == 1
  assert currentProducts[0] == book

def test_delete_product_from_cart():
  cart = Cart()
  book = Article("Libro", 100, 2)
  course = Service("Curso", 120, 1)
  cart.addProduct(book)
  cart.addProduct(course)
  cart.deleteProduct(book)
  currentProducts = cart.getProducts()
  assert len(currentProducts) == 1
  assert currentProducts[0] == course

def test_calculate_cart_total():
  cart = Cart()
  book = Article("Libro", 100, 2)
  course = Service("Curso", 120, 1)
  cart.addProduct(book)
  cart.addProduct(course)
  assert cart.calculateTotal() == 320

def test_add_article_return_string():
  book = Article("Libro", 100, 2)
  result = book.addToCart()
  assert isinstance(result, str)

def test_add_service_return_string():
  course = Service("Curso", 120, 1)
  result = course.addToCart()
  assert isinstance(result, str)

def test_product_addToCart_raises_error():
  product = Product("product", 1, 1)
  try:
    product.addToCart()
    assert False, "Exception not raised"
  except NotImplementedError as e:
    assert str(e) == "La lógica de este método debe ser implementada por las clases hijas"