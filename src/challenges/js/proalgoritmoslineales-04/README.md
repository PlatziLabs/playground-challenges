Vas a recibir la cabeza de una lista unidireccional.
La lista **no tiene valores repetidos** *(en esto último el ejercicio varía un poco de las clases anteriores)*.


La lista enlazada se puede representar de la siguiente forma:

```
L0 -> L1 -> L2 -> ... -> Ln - 2 -> Ln - 1 -> Ln
```

Debes reordenar la lista enlazada para que tenga la siguiente forma:

```
L0 -> Ln -> L1 -> Ln -1 -> L2 -> Ln - 2 -> ...
```


No debes modificar los valores de los nodos de la lista, solo el orden de los nodos en la lista (es decir, las relaciones entre nodos).


Ejemplo 1:

```js
// Input (1->2->3)
const nodo1 = new Nodo(1);
const nodo2 = new Nodo(2);
const nodo3 = new Nodo(3);
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;

// Output
reorderList(nodo1) // 1->3->2
```

Ejemplo 2:

```js
// Input (1->2->3->4)
const nodo1 = new Nodo(1);
const nodo2 = new Nodo(2);
const nodo3 = new Nodo(3);
const nodo4 = new Nodo(4);
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
nodo3.siguiente = nodo4;

// Output
reorderList(nodo1) // 1->4->2->3
```
