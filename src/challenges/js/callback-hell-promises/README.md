En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el **callback hell** y tu reto es evitarlo usando promesas.

> Nota: No uses async/await, ya que este reto se trata de resolverlo mediante promesas con la función `then`.

Para solucionarlo vas a encontrar una función llamada `runCode` que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo `tasks.js` con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función `runCode` debes escribir tu solución y además pasar  y deberías pasar las funciones del archivo `tasks.js` a promesas.

Ejemplo:

```js
Input:
runCode()
.then(response => console.log(response));

Output:
["Task 1", "Task 2", "Task 3"]
```
