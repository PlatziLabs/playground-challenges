import "./styles.css";
import { TeacherStudent } from "./exercise";
import { Student } from "./Student";

(() => {
  const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  const estudiante = new Student(props)

  document.getElementById("app").innerHTML = `
    <h2>Sobrescribir métodos heredados</h2>
    <p>Estudiante: <code>${JSON.stringify(estudiante, null, 2)}</code></p>
    <p>Mensaje estudiante: <code>${JSON.stringify(estudiante.publicarComentario('Mi primer comentario'), null, 2)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = `
       <p>Profesor: <code>${JSON.stringify(profesor, null, 2)}</code></p>
       <p>Mensaje profesor: <code>${JSON.stringify(profesor.publicarComentario('Mi primer comentario'), null, 2)}</code></p>
      `;
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
