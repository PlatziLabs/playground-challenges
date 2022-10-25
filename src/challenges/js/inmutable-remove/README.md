En este desafío tienes un array de números y tienes que eliminar un elemento de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array `[1, 2, 3]` y queremos eliminar la posición `0`, esto me debería retornar `[2, 3]` pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de `[1, 2, 3]`

Input

```js
solution([1, 2, 3], 0);
solution(["A", "B", "C"], 1);
```

Output

```js
[2, 3]
["A", "C"]
```
