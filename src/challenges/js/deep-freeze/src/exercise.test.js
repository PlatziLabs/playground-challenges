import { deepFreeze } from "./exercise";

const juan = {
  name: "Juanito",
  approvedCourses: ["Curso 1", "Curso 2"],
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


describe("tests", () => {
  beforeEach(() => {
    deepFreeze(juan)
  });

  it("Debe lanzar error al tratar de modificar una propiedad", () => {
    expect(() => {
      juan.caracteristicas.age = 20
    }).toThrow("Cannot assign to read only property 'age' of object '#<Object>'");
  });

  it("Debe lanzar error al tratar de modificar una propiedad anidada", () => {
    expect(() => {
      juan.caracteristicas.gustos.musica = ["pop"]
    }).toThrow("Cannot assign to read only property 'musica' of object '#<Object>'");
  });

  it("Debe lanzar error al tratar de agregar una propiedad", () => {
    expect(() => {
      juan.nuevaProp = 'NUEVA'
    }).toThrow("Cannot add property nuevaProp, object is not extensible");
  });

  it("Debe lanzar error al tratar de borrar una propiedad", () => {
    expect(() => {
      delete juan.name
    }).toThrow("Cannot delete property 'name' of #<Object>");
  });

});
