import "./styles.css";
import { runCode } from './exercise';

(async () => {
  document.getElementById("app").innerHTML = `
    <h1>Callback</h1>
    <p>Response from <code>runCode</code></p>
    <pre><code id="code"></code></pre>
  `;

  try {
    const rta = await runCode();
    document.getElementById("code").innerHTML = rta;
  } catch (error) {
    document.getElementById("code").innerHTML = error;
  }

})();
