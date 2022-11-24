import "./styles.css";
import { checkInString } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Check In String</h2>
    <p>Text</p>
    <p><input id="text" value="Ana lava la tina" /></p>
    <p>Term</p>
    <p><input id="term" value="ana" /></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
  const textElement = document.getElementById("text");
  const termElement = document.getElementById("term");

  runBtn.addEventListener("click", () => {
    try {
      const text = textElement.value;
      const term = termElement.value;
      const rta = checkInString(text, term);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
