import { Node } from "./node";

export class Playlist {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    const newSong = new Node(song);
    if (this.length === 0) {
      this.top = newSong;
      this.bottom = newSong;
    } else {
      newSong.next = this.top;
      this.top = newSong;
    }

    this.length++;
  }

  playSong() {
    if (this.length === 0) {
      throw new Error("No hay canciones en la playlist");
    }

    const actualSong = this.top.value;
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;

    this.length--;
    return actualSong;
  }

  getPlaylist() {
    const songs = [];
    let current = this.top;

    while (current) {
      songs.push(current.value);
      current = current.next;
    }

    return songs;
  }
}
