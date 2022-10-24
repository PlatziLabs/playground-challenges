import "./styles.css";
import { fibonacci } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
  <h1>Fibonacci</h1>
  <p>Number: </p>
  <p><input id="number" value="0" placeholder="Type value" /></p>
  <p><button id="btn" type="button">Run</button></p>
  <p><pre><code id="code"></code></pre></p>
  `;

  document.getElementById('btn').addEventListener('click', () => {
    try {
      const number = parseInt(document.getElementById('number').value, 10);
      const rta = fibonacci(number);
      document.getElementById('code').innerHTML = rta;
    } catch (error) {
      document.getElementById('code').innerHTML = error;
    }
  })
})();
