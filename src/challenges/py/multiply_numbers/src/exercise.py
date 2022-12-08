def multiply_numbers(numbers):
   return list(map(lambda x: x * 2, numbers))

numbers = [1, 2, 3, 4]
response = multiply_numbers(numbers)
print(response)