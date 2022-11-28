import "./styles.css";
import { sortByLength } from "./exercise";

(() => {
  const array = ["Hola","Viajar","Sol","Aprender"];

  document.getElementById("app").innerHTML = `
    <h1>Sort by Length</h1>
    <p>Array A: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = sortByLength(array);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
