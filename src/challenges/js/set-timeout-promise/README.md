En este desafío debes retornar el string "Hello, World!", con 2 segundos de retraso usando `setTimeout` y se debe ejecutar mediante una promesa.

> Nota: Debes usar la función `setTimeout` con el namespace `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

```js
window.setTimeout(() => {
  // code
})
```

La solución debería tener un input y output como los siguientes:

Input

```js
runCode()
.then(response => console.log(response));
```

Output

```bash
# after => 2s
"Hello, World!"
```
