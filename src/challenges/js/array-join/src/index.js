import "./styles.css";
import { joinString } from "./exercise";

(() => {
  const array = ["amor", "sol", "piedra", "día"]

  document.getElementById("app").innerHTML = `
    <h2>Merge Arrays</h2>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const rta = joinString(array);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
