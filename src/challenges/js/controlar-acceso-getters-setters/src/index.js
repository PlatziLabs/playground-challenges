import "./styles.css";
import { Course } from "./exercise";

(() => {
  function solution(courseName) {
    if (!courseName) {
      return "Necesitas ingresar un nombre de curso"
    }
    const nombreMaysuculas = new Course({
      name: courseName,
    });
    return nombreMaysuculas.name
  }

  document.getElementById("app").innerHTML = `
    <h2>Validar nombre de curso antes de guardar</h2>
    <p>Escribe aquí el nombre del curso:</p>
    <p><input placeholder="Nombre de un curso" id="courseName" /></p>
    <p>Te mostramos cómo queda almacenado el valor de la propiedad name</p>
    <p><button type="button" id="btn">Run Code</button></p>
    <p><pre><code id="rta"></code></pre></p>
    `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const inputCourseName = document.getElementById('courseName');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = solution(inputCourseName.value);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
