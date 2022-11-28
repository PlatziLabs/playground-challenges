En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el **callback hell** y tu reto es evitarlo usando `async/await`.

Para solucionarlo vas a encontrar una función llamada `runCode` que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo `tasks.js` con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función `runCode` debes escribir tu solución y además pasar  y deberías pasar las funciones del archivo `tasks.js` a promesas.

Ejemplo:

```js
Input:
await runCode();

Output:
["Task 1", "Task 2", "Task 3"]
```
