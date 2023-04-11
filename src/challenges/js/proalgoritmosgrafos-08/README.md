Dada una cuadrícula `m` x `n` y una cadena `palabra`, devuelve `true` si esta existe en la cuadrícula.

La palabra puede construirse a partir de letras de celdas secuencialmente adyacentes, donde las celdas adyacentes son vecinas horizontal o verticalmente.

Una misma celda de letra no pude ser utilizada más de una vez.

Ejemplo:

```js
// Input
const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
wordExist(board, word);

// Output
true
```

Ejemplo 2:

```js
// Input
const board = [
  ["A", "M", "C", "E"],
  ["A", "M", "C", "E"],
  ["A", "M", "C", "E"],
];
const word = "AMA";
wordExist(board, word);

// Output
false
```
