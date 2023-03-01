La función `letterCombinations` recibe un parámetro `numeroCelular` con un string que contiene alguna combinación de números del 2 al 9.

Cada número debe representar las siguientes posibles letras del abecedario:

- 2: a, b, c
- 3: d, e, f
- 4: g, h, i
- 5: j, k, l
- 6: m, n, o
- 7: p, q, r
- 8: s, t, u
- 9: v, z, y, z

Devuelve en cualquier orden todas las posibles combinaciones de letras que `numeroCelular` podría representar.

Ejemplo:

```js
// Input
letterCombinations("23")

// Output
[
  "ad", "ae", "af",
  "bd", "be", "bf",
  "cd", "ce", "cf",
]
```
