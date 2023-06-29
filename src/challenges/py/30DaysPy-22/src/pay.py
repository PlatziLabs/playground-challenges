class Pay:
  def __init__(self):
    pass
  
  def make_pay(self, amount):
    return {
      "realized": True,
      "quantity": amount
    }