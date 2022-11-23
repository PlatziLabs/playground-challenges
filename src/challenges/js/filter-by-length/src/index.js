import "./styles.css";
import { filterByLength } from "./exercise";

(() => {
  const array = ['amor', 'sol', 'piedra', 'día'];

  document.getElementById("app").innerHTML = `
    <h2>Filter by Length</h2>
    <p>Words:</p>
    <p><pre><code>${JSON.stringify(array, null, 1)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(filterByLength(array), null, 1);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
