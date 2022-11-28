import "./styles.css";
import { solution } from "./exercise";

(() => {
  const secreto1 = 1;
  const secreto2 = 5;
  const secreto3 = 10;

  document.getElementById("app").innerHTML = `
    <h2>Compara un número secreto</h2>
    <p>Secreto 1: <code>${JSON.stringify(secreto1)}</code></p>
    <p>Secreto 2: <code>${JSON.stringify(secreto2)}</code></p>
    <p>Secreto 3: <code>${JSON.stringify(secreto3)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(secreto1));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(secreto2));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(secreto3));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
