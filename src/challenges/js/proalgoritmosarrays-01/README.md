En una lengua alienígena también utilizan las letras del español, pero posiblemente en un orden diferente. Es una permutación de nuestro alfabeto.

Tu desafío es, dada una secuencia de palabras escritas en el idioma extranjero y el orden del alfabeto alienígena, devolver verdadero si y solo si las palabras dadas están ordenadas lexicográficamente según el orden de letras del alfabeto alienígena dado.

Ejemplo 1:

```js
// Input
const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";
isAlienSorted(words1, order1);

// Output
true
```

Ejemplo 2:

```js
// Input 1
const words2 = ["habito", "hacer", "sonreir", "lectura"];
const order2 = "hlabcdfgijkmnopqrstuvwxyz";
isAlienSorted(words2, order2);

// Output 2
false
```

Ejemplo 3:

```js
// Input
const words3 = ["conocer", "cono"];
const order3 = "abcdefghijkmnopqrstuvwxyz";
isAlienSorted(words3, order3);

// Output:
false
```
