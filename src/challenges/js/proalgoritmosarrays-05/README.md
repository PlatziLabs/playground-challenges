Tienes una lista de números enteros ordenada de forma ascendente y sin valores repetidos.

Pero posiblemente la lista se encuentre rotada en un índice pivote desconocido.

Por ejemplo, [0,1,2,4,5,6,7] podría girar en el índice pivote 3 y convertirse en [4,5,6,7,0,1,2].

Dado un array `nums` (después de la posible rotación) y un entero `objetivo`, si `objetivo` se encuentra en `nums`, devuelve su índide o posición en el array, si no, devuelve `-1`.

Ejemplo 1:

```js
// Input
const lista = [4,5,6,7,0,1,2];
const objetivo = 3;
searchInRotatedArray(lista, objetivo);

// Output
-1
```

Ejemplo 2:

```js
// Input
const lista = [12,13,9,10,11];
const objetivo = 10;
searchInRotatedArray(lista, objetivo);

// Output
3
```

