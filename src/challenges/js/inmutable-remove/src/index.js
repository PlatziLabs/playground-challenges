import "./styles.css";
import { removeFromArray } from "./exercise";

(() => {
  const array = [1, 2, 3];

  document.getElementById("app").innerHTML = `
    <h2>Update Array</h2>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><input id="index" value="0" /></p>
    <p><button id="btn">Run Code</button><p/>
    <p id="rta"></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const indexInput = document.getElementById('index');

  runBtn.addEventListener('click', () => {
    try {
      const index = parseInt(indexInput.value, 10);
      rtaElement.innerHTML = `<pre><code>${removeFromArray(array, index)}</code></pre>`;
      rtaElement.innerHTML += '</br>';
      rtaElement.innerHTML += `<p>Original: ${JSON.stringify(array)}</p>`;
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
