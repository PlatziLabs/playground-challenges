En este desafío tienes la función `delay` la cual se espera que dado un tiempo específico retorne un mensaje

La función deberá recibir dos parámetros:

- time = el tiempo de espera
- message = el mensaje que debe imprimir después del tiempo de espera

La función `delay` debe retornar promesa para poderlo usarlo de forma asíncrona.

> Nota: Debes usar la función `setTimeout` con el namespace `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

```js
window.setTimeout(() => {
  // code
})
```

La solución debería tener un input y output como los siguientes:

Input

```js
delay(2000, "Hello after 2s")
.then((message) => console.log(message))
```

Output

```js
// after 2s
"Hello after 2s"
```

O para otro tiempo

Input

```js
delay(3000, "Hello after 3s")
.then((message) => console.log(message))
```

Output

```js
// after 2s
"Hello after 3s"
```
