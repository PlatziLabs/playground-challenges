import "./styles.css";
import { calcSum } from "./exercise";

(() => {
  const array = [1, 2, 3, 4];

  document.getElementById("app").innerHTML = `
    <h2>Calc Total</h2>
    <p>Array</p>
    <p><pre><code>${JSON.stringify(array)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(calcSum(array), null, 1);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
