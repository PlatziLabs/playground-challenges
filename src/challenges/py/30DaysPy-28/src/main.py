from node import Node

class Playlist:
  def __init__(self):
    self.top = None
    self.bottom = None
    self.length = 0

  def addSong(self, song):
    new_node = Node(song)

    if not self.top:
      self.top = new_node
      self.bottom = new_node
    else:
      new_node.next = self.top
      self.top = new_node

    self.length += 1

  def playSong(self):
    if not self.top:
      raise Exception("No hay canciones en la lista")

    song = self.top.value
    self.top = self.top.next
    self.length -= 1

    if not self.top:
      self.bottom = None

    return song

  def getPlaylist(self):
    songs = []
    current = self.top

    while current:
      songs.append(current.value)
      current = current.next

    return songs