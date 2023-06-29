import { Playlist } from "./exercise";

describe("Playlist", () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });

  it("adds a song to an empty playlist", () => {
    playlist.addSong("Bohemian Rhapsody");

    expect(playlist.top.value).toBe("Bohemian Rhapsody");
    expect(playlist.bottom.value).toBe("Bohemian Rhapsody");
    expect(playlist.length).toBe(1);
  });

  it("adds a song to a non-empty playlist", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");

    expect(playlist.top.value).toBe("Stairway to Heaven");
    expect(playlist.bottom.value).toBe("Bohemian Rhapsody");
    expect(playlist.length).toBe(2);
  });

  it("throws an error if the playlist is empty", () => {
    expect(() => {
      playlist.playSong();
    }).toThrow();
  });

  it("should plays and removes the top song from the playlist", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");

    const song1 = playlist.playSong();
    expect(song1).toBe("Stairway to Heaven");
    expect(playlist.top.value).toBe("Bohemian Rhapsody");
    expect(playlist.bottom.value).toBe("Bohemian Rhapsody");
    expect(playlist.length).toBe(1);

    const song2 = playlist.playSong();
    expect(song2).toBe("Bohemian Rhapsody");
    expect(playlist.top).toBeNull();
    expect(playlist.bottom).toBeNull();
    expect(playlist.length).toBe(0);
  });

  it("should returns an empty array for an empty playlist", () => {
    const songs = playlist.getPlaylist();

    expect(songs).toEqual([]);
  });

  it("should return an array of songs in reverse order of addition", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");
    playlist.addSong("Hotel California");

    const songs = playlist.getPlaylist();

    expect(songs).toEqual([
      "Hotel California",
      "Stairway to Heaven",
      "Bohemian Rhapsody",
    ]);
  });

  it("returns an array of songs in reverse order of addition", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");
    playlist.addSong("Hotel California");

    const songs = playlist.getPlaylist();

    expect(songs).toEqual([
      "Hotel California",
      "Stairway to Heaven",
      "Bohemian Rhapsody",
    ]);
  });
});
