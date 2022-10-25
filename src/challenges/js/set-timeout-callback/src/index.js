import "./styles.css";
import { runCode } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h1>Callback</h1>
    <p>Response from <code>runCode</code></p>
    <pre><code id="code"></code></pre>
  `;

  const callback = () => {
    document.getElementById('code').innerHTML = 'run after 2s';
  }

  runCode(callback);

})();
