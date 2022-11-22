import "./styles.css";
import { solution } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h1>Operaciones Matemáticas</h1>
    <p>Primer número:</p>
    <input type="number" id="num1" >
    <p>Segundo número:</p>
    <input type="number" id="num2" >
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const num1 = parseInt(document.getElementById('num1').value);
      const num2 = parseInt(document.getElementById('num2').value);
      rtaElement.innerHTML = JSON.stringify(solution(num1, num2));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
