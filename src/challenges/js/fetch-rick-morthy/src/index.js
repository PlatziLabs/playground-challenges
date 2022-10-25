import "./styles.css";
import { runCode } from "./exercise";

(async () => {
  const rta = await runCode();

  document.getElementById("app").innerHTML = `
  <h1>Rick and Morty API</h1>
  <p>Response from runCode()</p>
  <p>
    <pre>
      <code>${rta}</code>
    </pre>
  </p>
  `;
})();
