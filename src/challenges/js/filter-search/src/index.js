import "./styles.css";
import { filterByTerm } from "./exercise";

(() => {
  const array = ["ana", "santi", "nico", "anastasia"];

  document.getElementById("app").innerHTML = `
    <h2>Filter By Term</h2>
    <p>Array</p>
    <p><pre><code>${JSON.stringify(array)}</code></pre></p>
    <p>Term</p>
    <p><input id="term" value="ana" /></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const termInput = document.getElementById('term');

  runBtn.addEventListener('click', () => {
    try {
      const term = termInput.value;
      const rta = filterByTerm(array, term);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
