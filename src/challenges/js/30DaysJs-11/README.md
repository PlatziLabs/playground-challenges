En este desafío debes utilizar promesas para enviar un correo electrónico.

La función `sendEmail` recibe tres parámetros: `email`, `subject` y `body`, los cuales son necesarios para enviar un correo. Deberás implementar la lógica necesaria para usar promesas y enviar el correo después de 2 segundos.

En caso de faltar algún dato, deberás lanzar un error con el mensaje indicando que faltan campos para enviar el correo. Recuerda utilizar la siguiente sintaxis:

```js
reject(new Error(message));
```

También recuerda que para usar `setInterval` o `setTimeout` debes usar el namespace de `window` de la siguiente manera para que las pruebas pasen correctamente.

```js
window.setTimeout(() => {
  // Código aquí
}, 1000);
```

Ejemplo 1:

```txt
Input:

sendEmail(
  "test@mail.com",
  "Nuevo reto",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))


Output:

// Después de 2 segundos

{
  email: "test@mail.com"
  subject: "Nuevo reto",
  body:  "Únete a los 30 días de JS",
}

```

Ejemplo 2:

```txt
Input:

sendEmail(
  "test@mail.com",
  "",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))

Output:

// Después de 2 segundos

"Error: Hacen falta campos para enviar el email"
```
