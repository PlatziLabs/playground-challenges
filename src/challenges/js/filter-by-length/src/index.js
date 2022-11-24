import "./styles.css";
import { filterByLength } from "./exercise";

(() => {
  const array = ['amor', 'sol', 'piedra', 'día'];

  document.getElementById("app").innerHTML = `
    <h2>Filter by Length</h2>
    <p>Words:</p>
    <p><pre><code>${JSON.stringify(array)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const rta = filterByLength(array);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(rta, null, 1);
    }
  });
})();
