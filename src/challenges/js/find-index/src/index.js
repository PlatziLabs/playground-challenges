import "./styles.css";
import { findMyKey } from "./exercise";

(() => {
  const arrayA = ["diamonds", "myKey", "AS"];
  const arrayB = ["diamonds", "AS"];

  document.getElementById("app").innerHTML = `
    <h2>Find Index</h2>
    <p>Array A: <code>${JSON.stringify(arrayA)}</code></p>
    <p>Array B: <code>${JSON.stringify(arrayB)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = findMyKey(arrayA);
      rtaElement.innerHTML += '</br>';
      rtaElement.innerHTML += findMyKey(arrayB);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
