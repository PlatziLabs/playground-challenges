class User:
  def __init__(self, name, age):
    self._name = name
    self._age = age
    self._friends = []
    self._messages = []

  def addFriend(self, friend):
      self._friends.append(friend)

  def sendMessage(self, message, friend):
      self._messages.append(message)
      friend._messages.append(message)

  def showMessages(self):
    return self._messages

  @property
  def name(self):
    return self._name

  @name.setter
  def name(self, value):
    self._name = value

  @property
  def age(self):
    return self._age

  @age.setter
  def age(self, value):
    self._age = value