import "./styles.css";
import { runCode } from './exercise';

(async () => {
  document.getElementById("app").innerHTML = `
    <h1>Refactor Challenge</h1>
    <p>Result from exec runCode:</p>
    <pre><code id="code"></code></pre>
  `;
  try {
    const rta = await runCode();
    document.getElementById("code").innerHTML = rta;
  } catch (error) {
    document.getElementById("code").innerHTML = error;
  }
})();
