def multiply_numbers(numbers):
   return list(map(lambda x: x * 2, numbers))

response = multiply_numbers([1, 2, 3, 4])
print(response)