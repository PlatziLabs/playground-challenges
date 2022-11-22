import "./styles.css";
import { mergeArrays } from "./exercise";

(() => {
  const arrayA = [1, 2, 3, 4];
  const arrayB = [5, 6, 7, 8];

  document.getElementById("app").innerHTML = `
    <h2>Merge Arrays</h2>
    <p>Array A: <code>${JSON.stringify(arrayA, null, 1)}</code></p>
    <p>Array B: <code>${JSON.stringify(arrayB, null, 1)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(mergeArrays(arrayA, arrayB), null, 1);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
