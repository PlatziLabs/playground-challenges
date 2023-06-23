En este desafío, debes crear una función llamada `calculate_average` que calcule el promedio de una lista de números. Sin embargo, la función debe manejar correctamente dos casos especiales:

- Si la lista está vacía, la función debe generar una excepción ValueError con el mensaje "La lista está vacía".

- Si la lista contiene elementos que no son números, la función debe generar una excepción TypeError con el mensaje "La lista contiene elementos no numéricos".

Tu objetivo es implementar la función calculate_average de manera que maneje adecuadamente estos casos y devuelva el promedio de los números en la lista.

Aquí tienes algunos ejemplos de entrada y salida esperada:

Ejemplo 1:

```txt

Input: calculate_average([1, 2, 3, 4, 5])
Output: 3.0
```

Ejemplo 2:

```txt

Input: calculate_average([10, 20, 30, 40, 50])
Output: 30.0
```

Ejemplo 3:

```txt

Input: calculate_average([])
Output: ValueError: La lista está vacía
```

Ejemplo 4:

```txt

Input: calculate_average([1, 2, '3', 4, 5])
Output: TypeError: La lista contiene elementos no numéricos
```
