from collections import Counter

def counter_numbers(numbers):
   return dict(Counter(numbers))

numbers = [1, 2, 2, 3, 3, 3]
response = counter_numbers(numbers)
print(response)