import "./styles.css";
import { solution } from "./exercise";

(() => {
  const arrayA = [16,8,10];
  const arrayB = [6,8,8];

  document.getElementById("app").innerHTML = `
    <h1>Triángulo Escaleno</h1>
    <p>Lista 1: <code>${JSON.stringify(arrayA)}</code></p>
    <p>Lista 2: <code>${JSON.stringify(arrayB)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rta1 = solution(...arrayA);
      rta2 = solution(...arrayB);
      rtaElement.innerHTML = rta1;
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += rta2;
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
