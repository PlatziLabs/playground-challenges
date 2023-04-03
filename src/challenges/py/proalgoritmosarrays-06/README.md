Debes escribir un algoritmo eficiente que busque un valor `objetivo` en una matriz de `m` x `n` enteros.

La matriz tiene las siguientes propiedades:

- Los enteros de cada fila están ordenados de izquierda a derecha.

- El primer entero de cada fila es mayor al último entero de la fila anterior.

Retorna `True` si el valor `objetivo` se encuentra en la matriz. Si no, retorna `False`.

Ejemplo 1:

```py
# Input
matriz = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60],
]
searchInMatrix(matriz, 3)

# Output
True
```

Ejemplo 2:

```py
# Input
matriz = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60],
]
searchInMatrix(matriz, 12)

# Output
False
```
