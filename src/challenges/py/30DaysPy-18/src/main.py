class Car:
  def __init__(self, brand, model, year, mileage):
<<<<<<< HEAD
    self.brand = brand
    self.model = model
    self.year = year
    self.mileage = mileage
    self.state = False
    
  def turnOn(self):
    self.state = True
  
  def turnOff(self):
    self.state = False
  
  def drive(self, kilometers):
    if(self.state):
      self.mileage += kilometers
    else:
      raise Exception("El auto está apagado")
    
response = Car("Toyota", "Corolla", 2020, 0)
print(response.brand)
=======
    # Tu código aquí 👈
    pass
>>>>>>> creational
