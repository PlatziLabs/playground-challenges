import "./styles.css";
import { myMap } from "./exercise";

(() => {
  const array = [1, 2, 3, 4];

  document.getElementById("app").innerHTML = `
    <h2>myMap implementation</h2>
    <p>Array: </p>
    <p><pre><code>${JSON.stringify(array)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  runBtn.addEventListener("click", () => {
    try {
      const double = (el) => el * 2;
      const rta = myMap(array, double);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
