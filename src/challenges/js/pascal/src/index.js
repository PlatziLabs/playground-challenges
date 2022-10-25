import "./styles.css";
import { pascalTriangle } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
  <h1>Triángulo de Pascal</h1>
  <p>Number:</p>
  <p><input placeholder="Digita el número" value="0" id="number" /></p>
  <p><button type="button" id="btn">Run Code</button></p>
  <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaElement = document.getElementById('rta');
  const btnElement = document.getElementById('btn');
  const inputNumber = document.getElementById('number');

  try {
    btnElement.addEventListener('click', () => {
      const number = parseInt(inputNumber.value, 10);
      rtaElement.innerHTML = pascalTriangle(number);
    });
  } catch (error) {
    rtaElement.innerHTML = error;
  }
})();
