import "./styles.css";
import { multiplyElements } from "./exercise";

(() => {
  const array = [1, 2, 3, 4, -2];

  document.getElementById("app").innerHTML = `
    <h2>Multiply Elements</h2>
    <p>Array:</p>
    <p><pre><code>${JSON.stringify(array)}</code></pre></p>
    <p><button id="btn">Run Code</button></p>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const btnElement = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  btnElement.addEventListener("click", () => {
    try {
      const rta = multiplyElements(array);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

})();
