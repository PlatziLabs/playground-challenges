import "./styles.css";
import { runCode } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Catch error</h2>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', async() => {
    try {
      await runCode();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
