Dado un objeto como el siguiente:

```js
const juan = {
  name: "Juanito",
  approvedCourses: ["Curso 1","Curso 2"],
  caracteristicas: {
    age: 18,
    colorCabello: 'Negro',
    gustos: {
      musica: ['rock', 'punk', 'ska'],
      peliculas: ['drama', 'horros', 'comedia'],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};
```

Tu reto es crear una función que aplique `Object.freeze` a todos los objetos anidados de forma recursiva para así realmente lograr bloquear todo el objeto. A esto se le conoce comunmente como **deepFreeze**.