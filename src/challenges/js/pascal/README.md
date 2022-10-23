En matemáticas, el **triángulo de Pascal** es una matriz triangular de los coeficientes binomiales.

Las filas del triángulo de Pascal se enumeran convencionalmente comenzando con la fila `n = 0` en la parte superior (la fila 0). Las entradas en cada fila están numeradas desde la izquierda comenzando con k = 0 y generalmente están escalonadas en relación con los números en las filas adyacentes. El triángulo se puede construir de la siguiente manera: en la fila 0 (la fila superior), hay una entrada única distinta de cero 1. Cada entrada de cada fila posterior se construye sumando el número de arriba y a la izquierda con el número de arriba y a la derecha, tratando las entradas en blanco como 0. Por ejemplo, el número inicial en la primera (o cualquier otra) fila es 1 (la suma de 0 y 1), mientras que los números 1 y 3 en la tercera fila se suman para producir el número 4 en la cuarta fila.

Tu desafío es completar un algoritmo que calcule los coeficientes del triángulo de Pascal para un número de línea específico.

La solución debería tener un input y output como los siguientes:

Input

```js
pascalTriangle(0);
pascalTriangle(1);
pascalTriangle(2);
```

Output

```js
[1]
[1, 1]
[1, 2, 1]
```
