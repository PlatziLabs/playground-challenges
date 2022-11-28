import "./styles.css";
import { flatArray } from "./exercise";

(() => {
  const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];

  document.getElementById("app").innerHTML = `
    <h2>Flat Arrays</h2>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = flatArray(array);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
