import "./styles.css";
import { solution } from "./exercise";

(() => {
  const arrayA = ["Huevo", "Gallina", "Vaca"];
  const arrayB = [1, "Gallina", "Vaca"];

  document.getElementById("app").innerHTML = `
    <h2>Detecta el Elemento Impostor de un Array</h2>
    <p>Array A: <code>${JSON.stringify(arrayA)}</code></p>
    <p>Array B: <code>${JSON.stringify(arrayB)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(arrayA));
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += JSON.stringify(solution(arrayB));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
