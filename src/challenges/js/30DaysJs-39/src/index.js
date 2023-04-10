import "./styles.css";
import { Playlist } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <code id="error"></code>
    <div class="container">
      <h3>Playlist</h3>
      <form>
        <p></p>
        <label for="song">Canción:</label>
        <p></p>
        <input type="text" id="song" name="song" placeholder="Escribe el nombre" >
        <p></p>
        <button type="button" id="add-song">Agregar</button>
      </form>
      <button type="button" id="play-song">Reproducir</button>
      <p></p>
      <div id="playlist"></div>
      <button type="button" id="get-playlist">Mostrar lista</button>
    </div>
  `;

  const playlist = new Playlist();

  const error = document.querySelector("#error");
  const form = document.querySelector("form");
  const songInput = document.getElementById("song");
  const addSongButton = document.getElementById("add-song");
  const playSongButton = document.getElementById("play-song");
  const playlistDiv = document.getElementById("playlist");
  const getPlaylistButton = document.getElementById("get-playlist");

  addSongButton.addEventListener("click", () => {
    const song = songInput.value;
    if (song) {
      playlist.addSong(song);
      playlistDiv.innerHTML = playlist.getPlaylist().join("<br>");
      songInput.value = "";
    }
  });

  playSongButton.addEventListener("click", () => {
    try {
      const song = playlist.playSong();
      error.textContent = `Playing: ${song}`;
      playlistDiv.innerHTML = playlist.getPlaylist().join("<br>");
    } catch (err) {
      error.textContent = err.message;
    }
  });

  getPlaylistButton.addEventListener("click", () => {
    playlistDiv.innerHTML = playlist.getPlaylist().join("<br>");
  });

  try {
    playlist.addSong("Hotel California");
    playlist.addSong("Stairway to Heaven");
    playlist.addSong("Bohemian Rhapsody");
    getPlaylistButton.click();
  } catch (err) {
    error.textContent = err.message;
  }
})();
