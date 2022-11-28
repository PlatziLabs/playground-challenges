import "./styles.css";
import { solution } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Reduce el número a 1 en la menor cantidad de pasos</h2>
    <p><input type="number" id="num" /></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const num = parseInt(document.getElementById('num').value);
      rtaElement.innerHTML = `<p> Pasos: <code>${JSON.stringify(solution(num))}</code></p>`
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();