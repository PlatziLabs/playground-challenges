En este reto dada la siguiente clase:

```js
export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {

  }

  set name(nuevoNombrecito) {

  }
}
```

Usando el `set` de la propiedad **name** valida siempre que se le quiera asignar un valor lo siguiente:
- Que sea de tipo string.
  - Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
- Si no es un string no se cambia el valor de la propiedad name.

La solución debería tener un input y output como los siguientes:

Input

```js
const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})
nombreMayusculas.name
```

Output

```js
'Curso de Programación Básica'
```
