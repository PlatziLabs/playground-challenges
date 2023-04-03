Dada la cabeza de una lista unidireccional, devuelve `true` si los valores de la lista forman un palíndromo.

> Recomendación: recuerda que en JavaScript (y otros lenguajes) la copia de objetos puede ser por valor o por referencia, lo puede afectar los resultados de tu algoritmo.

Ejemplo 1:

```js
// Input
const nodo1 = new Nodo("a");
const nodo2 = new Nodo("b");
const nodo3 = new Nodo("a");
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;

isPalindrome(nodo1);

// Output
true
```

Ejemplo 2:

```js
// Input
const nodo1b = new Nodo("a");
const nodo2b = new Nodo("a");
const nodo3b = new Nodo("b");
const nodo4b = new Nodo("a");
nodo1b.siguiente = nodo2b;
nodo2b.siguiente = nodo3b;
nodo3b.siguiente = nodo4b;

isPalindrome(nodo1);

// Output
false
```
