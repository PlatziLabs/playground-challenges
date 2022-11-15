import "./styles.css";
import { execCallback } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h1>Callback</h1>
    <p>Response from <code>runCode</code></p>
    <pre><code id="code"></code></pre>
  `;

  const rtaElement = document.getElementById('code');

  const callback = () => {
    rtaElement.innerHTML = 'run after 2s';
  }

  try {
    execCallback(callback);
  } catch (error) {
    rtaElement.innerHTML = JSON.stringify(error);
  }


})();
