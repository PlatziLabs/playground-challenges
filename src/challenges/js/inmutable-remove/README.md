En este desafío tienes un array de números y tienes que eliminar un elemento de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array `[1, 2, 3]` y queremos eliminar la posición `0`, esto me debería retornar `[2, 3]` pero el array enviadá no debe ser modificado, es decir debe mantenerse con su estado original de `[1, 2, 3]`

Para solucionarlo vas a encontrar una función llamada `removeFromArray` que tiene dos parámetros de entrada:

- array: Un array de números.
- index: La posición que se quiere eliminar.

Dentro del cuerpo de la función `removeFromArray` debes escribir tu solución.

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
