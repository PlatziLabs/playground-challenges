import "./styles.css";
import { mergeArrays } from "./exercise";

(() => {
  const arrayA = [1, 2, 3, 4];
  const arrayB = [5, 6, 7, 8];

  document.getElementById("app").innerHTML = `
    <h1>Merge Arrays</h1>
    <p>Array A: <code>${JSON.stringify(arrayA)}</code></p>
    <p>Array B: <code>${JSON.stringify(arrayB)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = mergeArrays(arrayA, arrayB);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
