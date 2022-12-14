def get_totals(orders):
   return [order['total'] for order in orders]

def calc_total(totals):
   return sum(totals)