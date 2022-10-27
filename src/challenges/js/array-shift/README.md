En este desafío tendrás que crear tu propia implementación del método `shift`.

Contrario al reto anterior, aquí tendrás que hacer tu propio método `shift` para borrar el **primer** elemento que exista en tu array y retornar el elemento eliminado (no olvides modificar la longitud).

En caso de ser un array vacío, este método deberá devolver `undefined`.

Tu implementación debería tener un input y output como los siguientes:

Input

```js
const myArray = new BetterArray()
myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

myArray.shift()
```

Output

```sh
"Un 🐱 random en el desafío"
```