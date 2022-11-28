import "./styles.css";
import { filterUnique } from "./exercise";

(() => {
  const array = [3, 3, 2, 2, 1, 1];

  document.getElementById("app").innerHTML = `
    <h2>Filter Unique</h2>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = filterUnique(array);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
