En este desafío tienes la función `execCallback` que recibirá un `callback` es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.

Para hacer que la función se demore 2 segundos debes usar la función `setTimeout`, pero para ejecutarla debes llamarla mediante el namescpace `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

```js
window.setTimeout(() => {
  // code
})
```

La solución debería tener un input y output como los siguientes:

Input

```js
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);
```

Output

```js
// Execute myFunc 2s after
```
