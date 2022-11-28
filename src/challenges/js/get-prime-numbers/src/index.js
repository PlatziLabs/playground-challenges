import "./styles.css";
import { solution } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Imprime los números primos</h2>
    <input id="inputNumber" value="5" type="number" />
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const inputNumber = document.getElementById("inputNumber").value;
      rtaElement.innerHTML = JSON.stringify(solution(inputNumber));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
