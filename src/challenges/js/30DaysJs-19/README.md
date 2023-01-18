Implementa la lógica para proteger un objeto de cambios.

En este desafío, debes implementar la lógica de la función llamada `protectDog` que reciba como parámetro los datos de un perro como objeto.

La función debe proteger el objeto y todos sus objetos anidados de ser modificados. Para lograr esto, debes utilizar el método `Object.freeze` para congelar el objeto y evitar cualquier cambio en sus propiedades. Además, se debe crear una copia del objeto original utilizando el método `Object.assign` y almacenarla en una variable. Por último, debe congelar el objeto copiado y devolverlo.

Ejemplo 1:

```
Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.name = "Toro"
protectedDog.name // "Romeo"
```

Ejemplo 2:

```
Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.owner.name = "Pedro"
protectedDog.owner.name // "Victor"
```
