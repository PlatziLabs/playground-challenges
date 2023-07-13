import pytest
from main import Playlist

def test_add_song_to_empty_playlist():
  playlist = Playlist()
  playlist.addSong("Bohemian Rhapsody")

  assert playlist.top.value == "Bohemian Rhapsody"
  assert playlist.bottom.value == "Bohemian Rhapsody"
  assert playlist.length == 1

def test_add_song_to_non_empty_playlist():
  playlist = Playlist()
  playlist.addSong("Bohemian Rhapsody")
  playlist.addSong("Stairway to Heaven")

  assert playlist.top.value == "Stairway to Heaven"
  assert playlist.bottom.value == "Bohemian Rhapsody"
  assert playlist.length == 2

def test_throw_error_if_playlist_is_empty():
  playlist = Playlist()

  with pytest.raises(Exception):
      playlist.playSong()

def test_plays_and_removes_top_song_from_playlist():
  playlist = Playlist()
  playlist.addSong("Bohemian Rhapsody")
  playlist.addSong("Stairway to Heaven")

  song1 = playlist.playSong()
  assert song1 == "Stairway to Heaven"
  assert playlist.top.value == "Bohemian Rhapsody"
  assert playlist.bottom.value == "Bohemian Rhapsody"
  assert playlist.length == 1

  song2 = playlist.playSong()
  assert song2 == "Bohemian Rhapsody"
  assert playlist.top is None
  assert playlist.bottom is None
  assert playlist.length == 0

def test_returns_empty_array_for_empty_playlist():
  playlist = Playlist()

  songs = playlist.getPlaylist()

  assert songs == []

def test_returns_array_of_songs_in_reverse_order_of_addition():
  playlist = Playlist()
  playlist.addSong("Bohemian Rhapsody")
  playlist.addSong("Stairway to Heaven")
  playlist.addSong("Hotel California")

  songs = playlist.getPlaylist()

  assert songs == ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]
