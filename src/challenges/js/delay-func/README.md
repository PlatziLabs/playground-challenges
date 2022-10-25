En este desafío debes crear una función la cual produzca una espera en un tiempo específico y debe funcionar como una promesa.

La función deberá recibir dos parámetros:

- time = el tiempo de espera
- message = el mensaje que debe imprimir despues del tiempo de espera

> Nota: Debes usar la función `setTimeout` con el namespace `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

La solución debería tener un input y output como los siguientes:

Input

```js
delay(2000, "Hello after 2s")
.then((message) => console.log(message))
```

Output

```bash
# after 2s
"Hello after 2s"
```
