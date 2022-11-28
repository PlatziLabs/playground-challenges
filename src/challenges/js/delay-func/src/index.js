import "./styles.css";
import { delay } from "./exercise";

(async () => {
  document.getElementById("app").innerHTML = `
    <h2>Delay function</h2>
    <p><input id="time" value="2000" type="number" /></p>
    <p><input id="message" value="Hello after 2s" type="text" /></p>
    <p><button type="button" id="btn">Run Delay</button></p>
    <p>Response from <code>runCode</code>
    <pre><code id="code"></code></pre>
  `;

  document.getElementById("btn").addEventListener("click", async () => {
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;
    let rta = "";
    try {
      rta = await delay(parseInt(time, 10), message);
    } catch (error) {
      rta = error;
    }
    document.getElementById("code").innerHTML = rta;
  });
})();

