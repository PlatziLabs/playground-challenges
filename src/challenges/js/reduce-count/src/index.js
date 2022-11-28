import "./styles.css";
import { counterNumbers } from "./exercise";

(() => {
  const array = [1, 2, 2, 3, 3, 3];

  document.getElementById("app").innerHTML = `
    <h1>Counter Numbers</h1>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = counterNumbers(array);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
