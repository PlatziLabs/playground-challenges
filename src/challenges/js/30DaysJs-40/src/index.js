import "./styles.css";
import { mergeArrays } from "./exercise";

(() => {
  const arrayA = [1, 2, 3, 4];
  const arrayB = [5, 6, 7, 8];

  document.getElementById("app").innerHTML = `
    <h2>Merge Arrays</h2>
    <p>Array A: </p>
    <p><pre><code>${JSON.stringify(arrayA)}</code></pre></p>
    <p>Array B: </p>
    <p><pre><code>${JSON.stringify(arrayB)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const rta = mergeArrays(arrayA, arrayB);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
