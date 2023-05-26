class Animal:
  def __init__(self, name, age, specie):
    self.name = name
    self.age = age
    self.specie = specie

  def getInfo(self):
    return {
      "name": self.name,
      "age": self.age,
      "specie": self.specie
    }


class Mammal(Animal):
  def __init__(self, name, age, specie, hasFur):
    super().__init__(name, age, specie)
    self.hasFur = hasFur

  def getInfo(self):
    info = super().getInfo()
    info["hasFur"] = self.hasFur
    return info


class Dog(Mammal):
  def __init__(self, name, age, breed):
    super().__init__(name, age, "dog", True)
    self.breed = breed

  def getInfo(self):
    info = super().getInfo()
    info["breed"] = self.breed
    return info

  def bark(self):
    return "woof!"
  
response = Animal("pepe", 1, "bird")
response.getInfo()