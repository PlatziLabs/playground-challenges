from pay import Pay

class Card(Pay):
  def __init__(self, card_number):
    self.card_number = card_number

  def make_pay(self, amount):
    if len(self.card_number) != 16:
      raise Exception("Invalid card number")
    payment_info = super().make_pay(amount)
    payment_info["last_card_numbers"] = self.card_number[-4:]
    return payment_info