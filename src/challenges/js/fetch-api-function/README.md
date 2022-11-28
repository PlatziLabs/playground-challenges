En este desafío debes crear una función que usando `fetch` haga llamadas a una API y esta función debe contar las siguientes características:

- Realiza la transformación de datos a JSON
- Solo permite hacer peticiones tipo GET
- Recibir como parámetro de entrada un string que será la URL
- Validar que una URL sea correcta, si no lo es debe lanzar un error con el mensaje `Invalid URL`
- Si la URL tiene el formato correcto, pero no existe, debería lanzar un error con el mensaje `Something was wrong`

Recuerda, para lanzar el error debes usar `throw`, ejemplo:

```js
throw new Error('Something was wrong');
```

Para solucionarlo vas a encontrar una función llamada `fetchData` que recibe un parámetros de entrada:

- url: La url de la API.

Dentro del cuerpo de la función `fetchData` debes escribir tu solución.

Ejemplo 1:

```js
Input:
await fetchData('https://api.escuelajs.co/api/v1/categories');

Output
// return data in json
[...]
```

Ejemplo 2:

```js
Input:
await fetchData('----');

Output
Error: Invalid URL
```

Ejemplo 3:

```js
Input:
await fetchData('https://domain-a.com/api-1');

Output:
Error: Something was wrong
```

