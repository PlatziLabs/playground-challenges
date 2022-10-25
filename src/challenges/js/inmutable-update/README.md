En este desafío tienes un array de números y tienes que modificar un valor de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array `[1, 2, 3]` y queremos modificar la posición `0` con el valor `'change'`, esto me debería retornar `['change', 2, 3]` pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de `[1, 2, 3]`

Input

```js
solution([1, 2, 3], 0, "change");
solution(["A", "B", "C"], 1, 1);
```

Output

```js
["change", 2, 3]
["A", 1, "C"]
```
