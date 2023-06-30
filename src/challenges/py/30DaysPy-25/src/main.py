class ContactList:
  def __init__(self, size):
    self.buckets = [None] * size
    self.numBuckets = size

  def hash(self, key):
    total = 0
    for char in key:
      total += ord(char)
    return total % self.numBuckets

  def insert(self, name, phone):
    index = self.hash(name)
    if self.buckets[index] is None:
      self.buckets[index] = []
    for i, contact in enumerate(self.buckets[index]):
      if contact[0] == name:
        self.buckets[index][i] = [name, phone]
        return
    self.buckets[index].append([name, phone])

  def get(self, name):
    index = self.hash(name)
    if self.buckets[index] is not None:
      for contact in self.buckets[index]:
        if contact[0] == name:
          return contact[1]
    return None

  def retrieveAll(self):
    allBuckets = []
    for bucket in self.buckets:
      if bucket is not None:
        allBuckets.extend(bucket)
    return allBuckets

  def delete(self, name):
    index = self.hash(name)
    if self.buckets[index] is not None:
      for i, contact in enumerate(self.buckets[index]):
        if contact[0] == name:
          del self.buckets[index][i]
          return
    return None

# Ejemplo 1
contactList = ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
print(contactList.retrieveAll())