Vamos a tomar como base los números del 3 al 8 para multiplciarlos por un mismo factor desconocido (x) que nos da ciertos resultados.

Entonces, dada una función que recibe un array númerico con los resultados debes encontrar el factor multiplicador (x) para obtener ese resultado multiplicando por los números del 3 al 8.

Ejemplo:

En el siguiente caso el factor sería 9.

```js
3 * x =  27
4 * x =  36
5 * x =  45
6 * x =  54
7 * x =  63
8 * x =  72
```

Si si un solo factor multiplicador difiere del resto se regresa `false`.

En el siguiente ejemplo la función regresaria `false` porque hay una resultado que tiene como factor multiplicador el **6** en lugar del **9** como el resto.

```js
3 * x =  27
4 * x =  36
5 * x =  45
6 * x =  54
7 * 6 =  42 <- 👈
8 * x =  72
```

Input:

```js
solution([27, 36, 45, 54, 63, 72])
solution([27, 36, 45, 54, 42, 72])

```

Output:

```js
9
false
```