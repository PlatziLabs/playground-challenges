def calculate_average(numbers):
  if len(numbers) == 0:
    raise ValueError("La lista está vacía")

  total = 0

  for num in numbers:
    if not isinstance(num, (int, float)):
      raise TypeError("La lista contiene elementos no numéricos")
    total += num

  return total / len(numbers)

response = calculate_average([1, 2, 3, 4, 5])
print(response)