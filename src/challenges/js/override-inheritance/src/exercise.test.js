import { TeacherStudent } from "./exercise";
import { Student } from "./Student";

const skills = ["js", "python", "mongodb"]
const props = {
  name: "Erik Ochoa",
  username: "elyager"
}
let profesor
let estudiante

describe("tests", () => {
  beforeEach(() => {
    profesor = new TeacherStudent(props, skills)
    estudiante = new Student(props)
  });

  it("Debe agregar valores a la propiedad 'skills'", () => {
    expect(profesor.skills).toBe(skills)
  });

  it("Debe ser instancia de TeacherStudent'", () => {
    expect(profesor).toBeInstanceOf(TeacherStudent)
  });

  it("El prototipo de TeacherStudent debe ser instancia de Student", () => {
    expect(Object.getPrototypeOf(profesor)).toBeInstanceOf(Student)
  });

  it("El comentario de un profesor debe contener sus skills'", () => {
    expect(profesor.publicarComentario('Mi primer comentario')).toEqual({ "studentName": "Erik Ochoa (profesor de js,python,mongodb)", "likes": "0 likes", "content": "Mi primer comentario" })
  });

});
