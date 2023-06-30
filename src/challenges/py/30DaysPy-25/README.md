En este desafío, debes construir una lista de contactos mediante una hash table.

Tu objetivo será implementar la lógica de la clase `ContactList` para agregar contactos y realizar las operaciones correspondientes.

La hash table (`ContactList`) deberá tener los siguientes métodos:

- `insert(name, phone)`: este método recibirá el nombre y el número de teléfono de un contacto y agregará este último a la hash table.

- `get(name)`: este método recibirá el nombre de un contacto y devolverá su número de teléfono. Si el contacto no existe, retornará `None`.

- `retrieveAll()`: este método devolverá una lista con todos los buckets utilizados en la hash table.

- `delete(name)`: este método recibirá el nombre de un contacto y eliminará dicho contacto de la hash table. En caso de no encontrar el nombre, debe retornar `None`.

El código original ya tiene una implementación del método hash, por lo que no tienes que preocuparte por ello.

Ejemplo 1:

```txt
Input
contactList = ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.retrieveAll()

Output: [["Mr michi", "123-456-7890"]]
```

Ejemplo 2:

```txt
Input:
contactList = ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.get("Mr Michi")

Output: "123-456-7890"
```

Ejemplo 3:

```txt
Input:
contactList = ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
contactList.delete("Mr michi")

contactList.get("Mr Michi")

Output: None
```