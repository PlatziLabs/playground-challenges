En este desafío tienes una lista de números y tienes que eliminar un elemento de esa lista en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar la lista original.

Un ejemplo sería enviar la lista `[1, 2, 3]` y queremos eliminar la posición `0`, esto me debería retornar `[2, 3]` pero la lista enviadá no debe ser modificado, es decir debe mantenerse con su estado original de `[1, 2, 3]`

Para solucionarlo vas a encontrar una función llamada `remove_from_list` que tiene dos parámetros de entrada:

- list: Una lista de números.
- index: La posición que se quiere eliminar.

Dentro del cuerpo de la función `remove_from_list` debes escribir tu solución.

Ejemplo 1:

```txt
Input: [1, 2, 3], 0
Output: [2, 3]

```

Ejemplo 2:

```txt
Input: ["A", "B", "C"], 1
Output: ["A", "C"]
```
