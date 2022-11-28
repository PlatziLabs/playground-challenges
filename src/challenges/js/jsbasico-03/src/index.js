import "./styles.css";
import { solution } from "./exercise";

(() => {
  const elemA = 'computadora';
  const elemB = 'celular';
  const elemC = 'cable';
  const elemD = 'gato';

  document.getElementById("app").innerHTML = `
    <h2>Tienda de Tecnología</h2>
    <p>Eleemento de prueba A: <code>${JSON.stringify(elemA)}</code></p>
    <p>Eleemento de prueba B: <code>${JSON.stringify(elemB)}</code></p>
    <p>Eleemento de prueba C: <code>${JSON.stringify(elemC)}</code></p>
    <p>Eleemento de prueba D: <code>${JSON.stringify(elemD)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(elemA));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(elemB));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(elemC));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(elemD));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
