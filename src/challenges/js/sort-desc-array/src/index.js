import "./styles.css";
import { sortDesc } from "./exercise";

(() => {
  const array = [3, 1, 11, 5, 2, 7, 8];

  document.getElementById("app").innerHTML = `
    <h1>Sort</h1>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = sortDesc(array);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
