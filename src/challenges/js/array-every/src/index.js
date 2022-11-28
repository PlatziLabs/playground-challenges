import "./styles.css";
import { checkArray } from "./exercise";

(() => {
  const arrayA = [2, 4, 6, 8];
  const arrayB = [5, 7, 9];

  document.getElementById("app").innerHTML = `
    <h2>Check Array</h2>
    <p>Array A: <code>${JSON.stringify(arrayA)}</code></p>
    <p>Array B: <code>${JSON.stringify(arrayB)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = checkArray(arrayA);
      rtaElement.innerHTML += '</br>';
      rtaElement.innerHTML += checkArray(arrayB);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
