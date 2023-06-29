from pay import Pay

class PayPal(Pay):
<<<<<<< HEAD
  def __init__(self, email):
    self.email = email

  def make_pay(self, amount):
    payment_info = super().make_pay(amount)
    payment_info["platform"] = "PayPal"
    payment_info["email"] = self.email
    return payment_info
=======
  # Tu código aquí 👇
  pass
>>>>>>> creational
