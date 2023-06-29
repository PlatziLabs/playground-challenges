def my_map(list, func):
  new_list = []
  for item in list:
    new_list.append(func(item))
  
  return new_list

response = my_map([1, 2, 3, 4], lambda num: num * 2)
print(response)