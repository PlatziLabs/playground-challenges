import "./styles.css";
import { filterByLength } from "./exercise";

(() => {
  const array = ['amor', 'sol', 'piedra', 'día'];

  document.getElementById("app").innerHTML = `
    <h1>Filter by Length</h1>
    <p>Words: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(filterByLength(array));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
