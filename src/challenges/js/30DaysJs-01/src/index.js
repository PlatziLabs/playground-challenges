import "./styles.css";
import { calculateTip } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Tip calculator</h2>
    <label for="billAmount">Bill amount</label>
    <p><input name="billAmount" id="billAmount" value="0" type="number" ></p>
    <label for="tipPercentage">Tip percentage</label>
    <p><input name="tipPercentage" id="tipPercentage" value="0" type="number" ></p>
    <p><button id="btn">Calculate</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const billAmount = document.getElementById("billAmount");
  const tipPercentage = document.getElementById("tipPercentage");

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  runBtn.addEventListener("click", () => {
    try {
      const billValue = Number(billAmount.value);
      const tipValue = Number(tipPercentage.value);
      const rta = calculateTip(billValue, tipValue);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
