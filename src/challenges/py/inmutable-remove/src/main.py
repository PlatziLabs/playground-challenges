def remove_from_list(numbers, index):
   new_list = numbers.copy()
   new_list.pop(index)
   return new_list


numbers = [1, 2, 3]
response = remove_from_list(numbers, 0)
print ('original => ', numbers)
print ('response => ', response)