import "./styles.css";
import { solution } from "./exercise";

(() => {
  const defaultArray = [27, 36, 45, 54, 63, 72]
  document.getElementById("app").innerHTML = `
    <h1>Obten el factor multiplicador</h1>
    <p>Array de prueba:<code> ${JSON.stringify(defaultArray)} </code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(defaultArray));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
