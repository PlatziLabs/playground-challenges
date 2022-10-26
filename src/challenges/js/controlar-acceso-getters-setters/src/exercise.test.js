import { Course } from "./exercise";

describe("tests", () => {
  let courseName = "curso de programación básica";
  let nuevoCurso;
  beforeEach(() => {
    nuevoCurso = new Course({
      name: courseName,
    });
  });

  it("Debe validar el nombre del curso incluso en el constructor", () => {
    expect(nuevoCurso).toEqual({ _name: "Curso De Programación Básica", classes: [] });
  });

  it("Debe aplicar letra mayúscula inicial en cada palabra", () => {
    nuevoCurso.name = 'nombre nuevo curso'
    expect(nuevoCurso).toEqual({ _name: "Nombre Nuevo Curso", classes: [] });
  });

  it("No debe cambiar la propiedad name si no es un string valido", () => {
    nuevoCurso.name = 2
    expect(nuevoCurso).toEqual({ _name: "Curso De Programación Básica", classes: [] });
  });

  it("No debe cambiar la propiedad name si es un string vacio", () => {
    nuevoCurso.name = " "
    expect(nuevoCurso).toEqual({ _name: "Curso De Programación Básica", classes: [] });
  });

  it("Debe eliminar espacios al inicio y al final del nombre", () => {
    nuevoCurso.name = " curso raro "
    expect(nuevoCurso).toEqual({ _name: "Curso Raro", classes: [] });
  });
});
