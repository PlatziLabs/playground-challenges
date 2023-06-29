def get_packages_info(packages):
<<<<<<< HEAD
   rta = {
      "total_weight": 0,
      "destinations": {}
   }
   
   for package in packages:
      weight = package[1]
      destination = package[2]
      existDestination = rta["destinations"].get(destination)
      
      rta["total_weight"] += weight
      
      if existDestination is None:
         rta["destinations"][destination] = 1
      else:
         rta["destinations"][destination] += 1
   
   rta["total_weight"] = round(rta["total_weight"], 2)
   
   return rta
      
   

response = get_packages_info([
  (1, 20, "Mexico"),
  (2, 15.5, "Colombia"),
  (3, 30, "Mexico"),
  (4, 12, "Argentina"),
  (5, 8.2, "Colombia"),
  (6, 25, "Mexico"),
  (7, 18.7, "Argentina"),
  (8, 5, "Colombia"),
  (9, 22.3, "Argentina"),
  (10, 14.8, "Colombia")
])

print(response)
=======
   # Tu código aquí 👈
   pass
>>>>>>> creational
