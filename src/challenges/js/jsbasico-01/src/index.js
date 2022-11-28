import "./styles.css";
import { solution } from "./exercise";

(() => {
  const n = 1;
  const s = "Dieguillo";
  const b = true;

  document.getElementById("app").innerHTML = `
    <h2>Retorna el tipo</h2>
    <p>Argumento de prueba 1: <code>${JSON.stringify(n)}</code></p>
    <p>Argumento de prueba 2: <code>${JSON.stringify(s)}</code></p>
    <p>Argumento de prueba 3: <code>${JSON.stringify(b)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(n));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(s));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(b));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
