import "./styles.css";
import { runCode } from "./exercise";

(async () => {

  document.getElementById("app").innerHTML = `
    <h1>Catch error</h1>
    <p>Response from <code>runCode</code>
    <pre><code id="code"></code></pre>
  `;

  let outputError = '';
  try {
    await runCode();
  } catch (error) {
    outputError = error;
    document.getElementById('code').innerHTML = outputError;
  }

})();
