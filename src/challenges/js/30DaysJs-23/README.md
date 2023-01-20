En este desafío, debes crear una clase "Usuario" que represente un usuario en una red social y utilizar encapsulamiento para proteger sus datos privados.

La clase debe tener los siguientes atributos privados:

- `nombre`
- `edad`
- `amigos` (array de objetos Usuario)
- `mensajes` (array de strings)

Además, debes proporcionar los siguientes métodos públicos:

- `agregarAmigo(amigo)`: agrega un usuario a la lista de amigos del usuario actual.
- `enviarMensaje(mensaje, amigo)`: agrega un mensaje a la lista de mensajes del usuario actual y al amigo especificado.
- `verMensajes()`: devuelve la lista de mensajes del usuario actual.

También debes tener definidos los getters y setters para acceder a los datos privados como el nombre y la edad, los cuales pueden ser modificados mediante su propio setter.

Ejemplo 1:

```txt

Input:

const usuario1 = new Usuario("Juan", 20);
const usuario2 = new Usuario("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

usuario1.showMessages()

Output:

["Hola Maria!"]

```

Ejemplo 2:

```txt

Input:

const usuario1 = new Usuario("Juan", 20);
usuario1.name = "Pepito"
usuario1.name

Output:

"Pepito"

```
