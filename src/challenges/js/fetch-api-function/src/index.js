import "./styles.css";
import { runCode } from "./exercise";

(async () => {
  document.getElementById("app").innerHTML = `
    <h2>Fetch Util</h2>
    <p><input id="input" value="https://api.escuelajs.co/api/v1/categories" type="text" /></p>
    <p><button type="button" id="btn">Fetch</button></p>
    <p>Response from <code>runCode</code>
    <pre><code id="code"></code></pre>
  `;

  document.getElementById("btn").addEventListener("click", async () => {
    const url = document.getElementById("input").value;
    let rta = "";
    try {
      rta = await runCode(url);
    } catch (error) {
      rta = error;
    }
    document.getElementById("code").innerHTML = rta;
  });
})();
