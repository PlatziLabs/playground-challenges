def calculate_discounted_price(price, discount):
  if not isinstance(price, (int, float)) or not isinstance(discount, (int, float)):
    raise TypeError("El precio y el descuento deben ser números")

  if price < 0 or discount < 0:
    raise ValueError("El precio y el descuento deben ser valores positivos")

  try:
    discounted_price = price - (price * discount)
    return discounted_price

  except Exception as e:
    raise Exception("Ha ocurrido un error inesperado: " + str(e))

response = calculate_discounted_price(100, 0.2)
print(response)