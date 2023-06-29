def calculate_tip(bill_amount, tipPercentage):
    tip = bill_amount * (tipPercentage / 100)
    return round(tip, 2)

response = calculate_tip(100, 10)
print(response)