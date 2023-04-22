def found_type(value):
   # Tu código aquí 👇
   return type(value)

response = found_type(1)
print(response)

response = found_type("Dieguillo")
print(response)

response = found_type(True)
print(response)