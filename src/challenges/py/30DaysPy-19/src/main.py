from product import Product

class Article(Product):
  def addToCart(self):
    return f"Agregando {self.quantity} unidades del articulo {self.name}"
  
class Service(Product):
  def addToCart(self):
    return f"Agregando el servicio {self.name} al carrito"
  
class Cart:
  def __init__(self):
    self.products = []
  
  def addProduct(self, product):
    product.addToCart()
    self.products.append(product)
  
  def deleteProduct(self, product):
    self.products = [item for item in self.products if item.name != product.name]
  
  def calculateTotal(self):
    total = sum(item.price * item.quantity for item in self.products)
    return total
  
  def getProducts(self):
    return self.products
  
book = Article("Libro", 100, 2)
course = Service("Curso", 120, 1)

cart = Cart()
cart.addProduct(book)
cart.addProduct(course)
total = cart.calculateTotal()
print(total)