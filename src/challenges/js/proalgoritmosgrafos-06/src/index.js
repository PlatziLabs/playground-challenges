import "./styles.css";
import { letterCombinations } from "./exercise";

(() => {
  const numero1 = "23";
  const numero2 = "967";

  document.getElementById("app").innerHTML = `
    <h2>Letter Combinations of a Phone Number</h2>

    <p>Número de celular 1:</p>
    <p><pre><code>${JSON.stringify(numero1)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
    
    <p>Número de celular 2:</p>
    <p><pre><code>${JSON.stringify(numero2)}</code></pre></p>
    <p><button id="btn2">Run Code</button><p/>
    <p><pre><code id="rta2"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const runBtn2 = document.getElementById('btn2');
  const rtaElement2 = document.getElementById('rta2');

  runBtn.addEventListener('click', () => {
    try {
      const rta = letterCombinations(numero1);
      rtaElement.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      console.error(error);
      rtaElement.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });

  runBtn2.addEventListener('click', () => {
    try {
      const rta = letterCombinations(numero2);
      rtaElement2.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      console.error(error);
      rtaElement2.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });
})();
