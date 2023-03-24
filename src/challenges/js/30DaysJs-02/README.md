En este desafío, debes crear la lógica de la función `isLeapYear`, que determina si un año es bisiesto o no. Un año es bisiesto si cumple con las siguientes condiciones:

- Es divisible por 4, pero no por 100.
- Si es divisible por 100 debe serlo por 400 también.

La función `isLeapYear` recibe un único parámetro: el año a evaluar. Debe devolver `true` si el año es bisiesto o `false` en caso contrario.

Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos.

Ejemplo 1:

```txt
Input: 2000;
Output: true;
```

Ejemplo 2:

```txt
Input: -2024;
Output: false;
```

Ejemplo 3:

```txt
Input: 1984.25;
Output: false;
```
