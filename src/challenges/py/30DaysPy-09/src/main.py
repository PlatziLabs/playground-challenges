def find_set_intersection(sets):
<<<<<<< HEAD
    if len(sets) == 0:
        return set()
    
    intersection = sets[0]
    
    for item in sets[1:]:
        intersection = intersection.intersection(item)
    
    return intersection


response = find_set_intersection([
    {1, 2, 3, 4},
    {2, 3, 4, 5},
    {3, 4, 5, 6}
])

print(response)
=======
  # Tu código aquí 👈
  pass
>>>>>>> creational
