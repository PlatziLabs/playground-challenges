Dada la cabeza de una lista enlazada debes determinar si hay un ciclo en la lista. Retorna `True` si encuentras un ciclo y retorna `False` en caso de que no.

Ejemplo 1:

```py
# Input
nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo4 = Nodo(4)
nodo1.siguiente = nodo2
nodo2.siguiente = nodo3
nodo3.siguiente = nodo4

response = hasCycle(nodo1)

# Output
False
```

Ejemplo 2:

```py
# Input
nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo4 = Nodo(4)
nodo1.siguiente = nodo2
nodo2.siguiente = nodo3
nodo3.siguiente = nodo4
nodo4.siguiente = nodo2

response = hasCycle(nodo1)

# Output
True
```
