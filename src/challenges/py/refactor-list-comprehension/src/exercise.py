numbers = [35, 16, 10, 34, 37, 25]

# Refactorizar usando List Comprehension 👇
result = []
for number in numbers:
  if number % 2 == 0:
    result.append(number)
print(result)