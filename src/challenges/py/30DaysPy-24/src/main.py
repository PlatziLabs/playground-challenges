class MyList:
  def __init__(self):
    self.data = {} 
    self.length = 0 

  def append(self, item):
    self.data[self.length] = item
    self.length += 1

  def pop(self):
    if self.length == 0:
      return None
    last_item = self.data[self.length - 1]
    del self.data[self.length - 1]
    self.length -= 1
    return last_item

  def shift(self):
    if self.length == 0:
      return None
    first_item = self.data[0]
    for i in range(1, self.length):
      self.data[i - 1] = self.data[i]
      
    del self.data[self.length - 1]
    self.length -= 1
    return first_item

  def unshift(self, item):
    for i in range(self.length, 0, -1):
      self.data[i] = self.data[i - 1]
      
    self.data[0] = item
    self.length += 1

  def map(self, func):
    new_array = MyList()
    for i in range(self.length):
      new_array.append(func(self.data[i]))
      
    return new_array

  def filter(self, func):
    new_array = MyList()
    for i in range(self.length):
      if func(self.data[i]):
        new_array.append(self.data[i])
        
    return new_array

  def join(self, character=","):
    joined_string = ""
    for i in range(self.length):
      joined_string += str(self.data[i])
      
      if i != self.length - 1:
        joined_string += character
        
    return joined_string