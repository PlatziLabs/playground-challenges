En este desafío tienes que crear una función que reciba un `callback` pero este tiene que ser ejecutado 2s despues.

> Nota: Debes usar la función `setTimeout` con el namespace `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

```js
window.setTimeout(() => {
  // code
})
```

La solución debería tener un input y output como los siguientes:

Input

```js
runCode(() => console.log('Log after 2s'));
```

Output

```js
// Execute function 2s after
```
