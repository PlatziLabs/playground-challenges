import "./styles.css";
import { runCode } from "./exercise";

(() => {
  const array = [1, 2, 3, 4];

  document.getElementById("app").innerHTML = `
    <h1>Multiplicar elementos</h1>
    <p>Array de prueba <code>${JSON.stringify(array)}</code></p>
    <p>
      <button id="btn">Run Code</button>
    </p>
    <p>Response from <code>runCode</code></p>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  rtaBtn.addEventListener("click", () => {
    const rta = runCode(array);
    try {
      rtaElement.innerHTML = rta;
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });

})();
