En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos. 

Tu tarea será proveer de una función `getId()` que se encargue de generar dichos identificadores y, a través de un método `.next()` se pueda pasar al siguiente identificador, y a través de la propiedad `.value` se pueda obtener el valor del nuevo identificador.

Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

```js
const id = getId();
id.next().value
```

El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

**Ejemplo 1:**

**Input:**

```js
const id = getId()
id.next().value
id.next().value
id.next().value
```

**Output:**

```js
1
2
3
```

**Ejemplo 2:**

**Input:**

```js
const id = getId()
id.next().value
id.next().value
id.next().value
```

**Output:**

```js
AX6SF5S
G7QNW01
KH3BR02
```