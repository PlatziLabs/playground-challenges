En este ejercicio práctico, crearás métodos adicionales para una singly linked list.

Para este ejercicio, deberás implementar la lógica de algunos métodos de `LinkedListRecharged` que heredará de un `LinkedList` (`SinglyLinkedList.js`) previamente creada.

Los métodos que deberás implementar son los siguientes

- get(index): este método recibirá un index y retornará el valor del nodo en la posición buscada, en caso de recibir un index invalido este retornará `null`.

- insertAt(index, value): este método inserta un valor en la posición especificada.

- toArray(): Tomará todos los valores de la singly linked list y los retornará en un array.

- removeAt(index): este método elimina el nodo en el index especificado y retorna el valor.

> Las pruebas harán uso del método toArray() para comparar resultados.

Ejemplo 1:

```txt

Input:
const linkedList = new LinkedListRecharged();

El método append ya se encuentra implementado por lo que no debes preocuparte
linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");

linkedList.get(1)

Output:
"Días"
```

Ejemplo 2:

```txt
Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insertAt(1, 5)

linkedList.toArray()

Output:
[1, 5, 2, 3]
```

Ejemplo 3:

```txt

Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.removeAt(1);

linkedList.toArray()

Output:
[1, 3]
```
