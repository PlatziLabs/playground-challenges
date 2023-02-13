Dada la cabeza de una lista enlazada, debes agrupar todos los nodos con índices impares seguidos de los nodos con índices pares y devolver la lista reordenada.

El primer nodo se considera impar, el segundo se considera par y así sucesivamente.

Recuerda que retornar una lista enlazada significa retornar su cabeza.

Por ejemplo:

```js
// Input (1->2->3)
const nodo1 = new Nodo(1);
const nodo2 = new Nodo(2);
const nodo3 = new Nodo(3);
const nodo4 = new Nodo(4);
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
nodo3.siguiente = nodo4;

const nuevoNodo1 = oddEvenList(nodo1);

// Output (1->3->2->4)
nuevoNodo1.siguiente // nodo3
nuevoNodo1.siguiente.siguiente // nodo2
nuevoNodo1.siguiente.siguiente.siguiente // nodo4
nuevoNodo1.siguiente.siguiente.siguiente.siguiente // null
```
