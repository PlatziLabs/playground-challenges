import "./styles.css";
import { addNumber } from "./exercise";

(() => {
  const array = [1, 2, 3, 4];

  document.getElementById("app").innerHTML = `
    <h2>Add Element</h2>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><input id="newValue" value="change" /></p>
    <p><button id="btn">Run Code</button><p/>
    <p id="rta"></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
  const newValueInput = document.getElementById("#newValue");

  runBtn.addEventListener("click", () => {
    try {
      const newValue = newValueInput.value;
      rtaElement.innerHTML = `<pre><code>${JSON.stringify(
        addNumber(array, newValue)
      )}</code></pre>`;
      rtaElement.innerHTML += "</br>";
      rtaElement.innerHTML += `<p>Original: ${JSON.stringify(array)}</p>`;
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
