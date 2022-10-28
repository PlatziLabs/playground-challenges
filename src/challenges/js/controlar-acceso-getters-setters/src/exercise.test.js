import { Course } from "./exercise";

describe("tests", () => {
  let courseName = "curso de programación básica";
  let nuevoCurso;
  beforeEach(() => {
    nuevoCurso = new Course({
      name: courseName,
    });
  });

  it("should validate the course name in the constructor", () => {
    expect(nuevoCurso).toEqual({ _name: "Curso De Programación Básica", classes: [] });
  });

  it("should apply capital letter to each word", () => {
    nuevoCurso.name = 'nombre nuevo curso'
    expect(nuevoCurso).toEqual({ _name: "Nombre Nuevo Curso", classes: [] });
  });

  it("should keep property name intact if is not a valid string", () => {
    nuevoCurso.name = 2
    expect(nuevoCurso).toEqual({ _name: "Curso De Programación Básica", classes: [] });
  });

  it("should keep property name intact if is an empty string", () => {
    nuevoCurso.name = " "
    expect(nuevoCurso).toEqual({ _name: "Curso De Programación Básica", classes: [] });
  });

  it("should return the course title trimming empty spaces at beginning and ending", () => {
    nuevoCurso.name = " curso raro "
    expect(nuevoCurso).toEqual({ _name: "Curso Raro", classes: [] });
  });
});
