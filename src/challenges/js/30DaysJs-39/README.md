En este ejercicio, el objetivo es implementar una playlist de un servicio de música utilizando un stack en JavaScript.

Crea una clase Playlist que tenga como propiedad un stack vacío.

- addSong(song): este método debe permitir agregar una canción a la pila.

- playSong(): este método debe permitir reproducir la canción que está en el tope del stack y luego eliminarla. Si el stack está vacío, deberá lanzar un error con el mensaje "No hay canciones en la lista".

- getPlaylist() transforma el stack a un array con todas las canciones que están en el, en orden de reproducción (de la última agregada a la primera).

Ejemplo 1:

```txt
Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.playSong();
Output: "Bohemian Rhapsody"
playlist.playSong();
Output: "Stairway to Heaven"
playlist.playSong();
Output: "Hotel California"
playlist.playSong();
Output: Error: No hay canciones en la lista

playlist.getPlaylist(); // ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]
```

Ejemplo 2:

```txt

Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.getPlaylist();

Output: ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]

```
