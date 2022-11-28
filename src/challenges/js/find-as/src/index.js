import "./styles.css";
import { findAs } from "./exercise";

(() => {
  const arrayA = ['hearts', 'spades', 'AS'];
  const arrayB = ['hearts', 'spades'];

  document.getElementById("app").innerHTML = `
    <h2>Find As</h2>
    <p>Array A: <code>${JSON.stringify(arrayA)}</code></p>
    <p>Array B: <code>${JSON.stringify(arrayB)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = findAs(arrayA);
      rtaElement.innerHTML += '</br>';
      rtaElement.innerHTML += findAs(arrayB);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
