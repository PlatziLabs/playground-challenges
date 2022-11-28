import "./styles.css";
import { deepFreeze } from "./exercise";

(() => {
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

  document.getElementById("app").innerHTML = `
    <h2>Merge Arrays</h2>
    <p>Objeto original: <code>${JSON.stringify(juan)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      deepFreeze(juan);
      juan.caracteristicas.age = 20;
      juan.caracteristicas.gustos.musica = ["pop"];
      juan.caracteristicas.gustos.peliculas = [];
      rtaElement.innerHTML = `
        <p>El objeto no deberia estar modificado si estás aplicando el deepFreeze correctamente.</p>
        <p><code>${JSON.stringify(juan)}</code></p>
      `;
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
