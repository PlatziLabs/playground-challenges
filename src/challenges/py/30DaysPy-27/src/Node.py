class PatientNode:
  def __init__(self, name, age, bed_number):
    self.name = name
    self.age = age
    self.bed_number = bed_number
    self.next = None
