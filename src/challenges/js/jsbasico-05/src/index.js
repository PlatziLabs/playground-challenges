import "./styles.css";
import { solution } from "./exercise";

(() => {
  const arrayA = ["Nico", "Zule"];
  const deathCountA = 0;
  const nuevoA = "Santi";
  const arrayB = ["Juan", "Juanita", "Daniela"];
  const deathCountB = 1;
  const nuevoB = "Julian";
  const arrayC = ["Nath", "Luisa", "Noru"];
  const deathCountC = 2;
  const nuevoC = "Cami";

  document.getElementById("app").innerHTML = `
    <h2>Rescata al estudiante</h2>
    <p>Argumentos de prueba A:
      <code>
        ${JSON.stringify(arrayA)}
        ${JSON.stringify(deathCountA)}
        ${JSON.stringify(nuevoA)}
      </code>
    </p>

    <p>Argumentos de prueba B:
      <code>
        ${JSON.stringify(arrayB)}
        ${JSON.stringify(deathCountB)}
        ${JSON.stringify(nuevoB)}
      </code>
    </p>

    <p>Argumentos de prueba C:
      <code>
        ${JSON.stringify(arrayC)}
        ${JSON.stringify(deathCountC)}
        ${JSON.stringify(nuevoC)}
      </code>
    </p>

    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      /* Los estudiantes aún no aprenden sobre inmutabilidad,
        seguramente van a manipular el array original,
        las copias evitan que el preview muestre arrays manipulados
        por la misma función de los estudiantes cuando oprimen
        el botón más de una vez */

      const copiaArrayA = [...arrayA];
      const copiaArrayB = [...arrayB];
      const copiaArrayC = [...arrayC];

      rtaElement.innerHTML = JSON.stringify(solution(copiaArrayA, deathCountA, nuevoA));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(copiaArrayB, deathCountB, nuevoB));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(copiaArrayC, deathCountC, nuevoC));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
