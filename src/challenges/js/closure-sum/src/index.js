import "./styles.css";
import { sumWithClosure } from "./exercise";

(() => {
  const firstNum = 2;
  const secondNum = 3;

  document.getElementById("app").innerHTML = `
    <h2>sum with closure</h2>
    <p>first num: <code>${firstNum}</code></p>
    <p>second num: <code>${secondNum}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  runBtn.addEventListener("click", () => {
    try {
      rtaElement.innerHTML = sumWithClosure(firstNum)(secondNum);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
