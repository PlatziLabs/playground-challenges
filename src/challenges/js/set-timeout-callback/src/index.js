import "./styles.css";
import { execCallback } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Callback</h2>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  const callback = () => {
    rtaElement.innerHTML = 'run after 2s';
  }

  runBtn.addEventListener('click', () => {
    try {
      execCallback(callback);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

})();
