En este desafío deberás validar un formulario de registro de usuario.

Tu tarea es implementar la lógica de la función `validateForm` la cual recibirá como parámetro un objeto con los datos del formulario al igual que una lista de usurios registrados.

La función debe verificar que todos los campos requeridos del formulario (`name`, `lastname`, `email` y `password`) estén completos, si falta algún campo, debe lanzar un error especificando los campos faltantes.

Para lanzar dicho error debes usar la siguiente sintaxis

```js
throw new Error("Faltan los siguientes campos: name, email, etc...");
```

Además, la función debe verificar si el email ingresado ya existe en la lista de usuarios registrados. Si el email ya está en uso, debe retornar un error especificando el email duplicado.

Si todo está correcto, se debe agregar el usuario a la lista de usuarios registrados con todos los datos excepto la contraseña y retornar un mensaje indicando que el registro fue exitoso junto con el nombre y apellido del usuario.

Ejemplo 1

```txt
Input:

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "juan@example.com",
  password: "123456"
}

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData, registeredUsers)

Output:

"Tu registro fue exitoso Juan Perez"

```

Ejemplo 2

```txt

Input:

const formData = {
  name: "Juan",
  password: "123456",
};

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData, registeredUsers)

Output:

"Faltan los siguientes campos requeridos: lastname, email"

```
