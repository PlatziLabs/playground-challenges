En este desafío implementarás una función que filtre los mensajes de un usuario específico. La función `filter_user_messages` recibirá dos parámetros:

- `messages`: una lista de mensajes
- `user`: un nombre de usuario.

Debe devolver una nueva lista que contenga solo los mensajes del usuario especificado.

La lista messages contiene diccionarios con información sobre cada mensaje, incluyendo el remitente ('sender') y el contenido del mensaje ('content').

> En caso de no encontrar mensajes del usuario deberá retornar una lista vacía `[]`

Ejemplo 1:

```txt
Input:

messages = [
  {'sender': 'Alice', 'content': 'Hola, ¿cómo estás?'},
  {'sender': 'Bob', 'content': '¡Bien, gracias!'},
  {'sender': 'Alice', 'content': '¿Quieres tomar un café?'},
  {'sender': 'Charlie', 'content': 'Hola a todos.'},
  {'sender': 'Alice', 'content': 'Nos vemos luego.'}
]

user = 'Alice'
filter_user_messages(messages, user)

Output:

[
  {'sender': 'Alice', 'content': 'Hola, ¿cómo estás?'},
  {'sender': 'Alice', 'content': '¿Quieres tomar un café?'},
  {'sender': 'Alice', 'content': 'Nos vemos luego.'}
]

```
