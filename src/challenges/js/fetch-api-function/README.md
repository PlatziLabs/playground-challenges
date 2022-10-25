En este desafío debes crear una función que usando `fetch` haga llamadas a APIs y debe contar las siguientes características:

- Realiza la transformación de datos a JSON
- Solo permite hacer peticiones tipo GET
- Recibir como parámetro de entrada un string que será la URL
- Validar que una URL sea correcta, si no lo es debe lanzar un error con el mensaje `Invalid URL`
- Si la URL tiene el formato correcto, pero no existe, debería lanzar un error con el mensaje `Something was wrong`

La solución debería tener un input y ouput como los siguientes:

Input

```js
await fetchData('https://api.escuelajs.co/api/v1/categories');
```

Output

```js
// return data in json
[...]
```

Input

```js
await fetchData('----');
```


Output

```js
// Error: Invalid URL
```

Input

```js
await fetchData('https://domain-a.com/api-1');
```


Output

```js
// Error: Something was wrong
```
