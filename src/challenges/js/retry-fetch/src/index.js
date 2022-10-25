import "./styles.css";
import { fetchRetry } from "./exercise";

(async () => {
  document.getElementById("app").innerHTML = `
    <h1>Fetch Util</h1>
    <p><input id="url" value="https://api.escuelajs.co/api/v1/categories" type="text" placeholder="url"  /></p>
    <p><input id="retries" value="1" type="number" placeholder="retries" /></p>
    <p><button type="button" id="btn">Fetch</button></p>
    <p>Response from <code>fetchRetry</code>
    <pre><code id="code"></code></pre>
  `;

  document.getElementById("btn").addEventListener("click", async () => {
    const url = document.getElementById("url").value;
    const retries = document.getElementById("retries").value;
    let rta = "";
    try {
      rta = await fetchRetry(url, parseInt(retries, 10));
    } catch (error) {
      rta = error;
    }
    document.getElementById("code").innerHTML = rta;
  });
})();
