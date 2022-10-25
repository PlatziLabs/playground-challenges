En algunas ocasiones nuestros usuarios pueden tener mala conexión a internet y puede que necesiten de tu ayuda para reintentar varias veces una petición, tu reto es crear una función que haga peticiónes tipo GET a una API usando `fetch`, pero con un número de intentos, es decir si le envías 3 intentos la petición debe volverse a enviar el número de intentos que hayas especificado.

Si la petición es exitosa en cualquiera de los intentos, debe retornar la información en formato JSON, pero si en todos los intentos fallo debe retornar un error con el siguiente mensaje "Invalid request with x retries"

La solución debería tener un input y output como los siguientes:

Input

```js
await fetchRetry('https://domain-a.com/api-1', 5);
```

Output

```js
Invalid request with 5 retries
```
