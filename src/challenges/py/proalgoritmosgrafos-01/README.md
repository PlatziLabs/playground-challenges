Tu función sum_numbers va a recibir el nodo `raiz` de un árbol binario con solo valores entre el `0` y `9`.

Debes retornar la suma total de todos los números formados por los caminos entre la raíz y los nodos que son hojas.

Por ejemplo:

```py
# Input
nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo1.izquierda = nodo2
nodo1.derecha = nodo3

sum_numbers(nodo1)

# Output
25
```
