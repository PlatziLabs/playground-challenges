Vas a recibir una cuadrícula `m` x `n` en la que cada celda puede tener uno de los tres valores siguientes:

- `0`: representa una celda vacía
- `1`: representa una naranja fresca
- `2`: representa una naranja podrida

Cada día cualquier naranja 4-direccionalmente adyacente a una naranja podrida también se vuelve podrida.

Debes retornar el número mínimo de días que deben transcurrir hasta que ninguna celda tenga una naranja fresca. Si esto es imposible, retorna -1.

Por ejemplo:

```js
// Input
const cultivo = [
  [2,1,1],
  [1,1,0],
  [0,1,1],
];
orangesRotting(cultivo);

// Output
4
```
