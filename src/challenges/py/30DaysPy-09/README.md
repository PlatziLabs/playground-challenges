En este desafío, debes implementar la lógica de la función `find_set_intersection` que encuentre la intersección de conjuntos en una lista de conjuntos.

Recibirás un único parámetro: una lista de conjuntos. La función debe encontrar la intersección de todos los conjuntos de la lista y devolver el resultado como un nuevo conjunto. Si la lista está vacía o no hay intersección entre los conjuntos, la función debe devolver un conjunto vacío.

Ejemplo 1:

```txt

Input:

sets = [
  {1, 2, 3, 4},
  {2, 3, 4, 5},
  {3, 4, 5, 6}
]

find_set_intersection(sets)

Output: {3, 4}

```

Ejemplo 2:

```txt

Input:

sets = [
  {1, 2, 3, 4},
  {2, 4, 6, 8},
  {3, 6, 9, 12}
]

find_set_intersection(sets)

Output: set()

```
