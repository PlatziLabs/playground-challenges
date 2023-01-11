import "./styles.css";
import { createCalculator } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Closure calculator</h2>
    <label for="num" >Escribe un número</label>
    <p><input placeholder="" type="number" name="num" value=0 id="num"></p>
    <p>Operación</p>
    <p>
      <select id="select" >
        <option value="add">
          Suma
        </option>
        <option value="subtract">
          Resta
        </option>
        <option value="multiply">
          Multiplicación
        </option>
        <option value="division">
          División
        </option>
        <option value="total">
          Total
        </option>
        <option value="clear">
          Reiniciar
        </option>
      </select>
    </p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  const select = document.getElementById("select");
  const input = document.getElementById("num");

  let globalValue = 0;

  runBtn.addEventListener("click", () => {
    try {
      const calculator = createCalculator();
      calculator.add(globalValue);
      const value = Number(input.value);
      const operation = select.value;
      switch (operation) {
        case "add":
          rtaElement.textContent = calculator.add(value);
          break;
        case "subtract":
          rtaElement.textContent = calculator.subtract(value);
          break;
        case "multiply":
          rtaElement.textContent = calculator.multiply(value);
          break;
        case "division":
          rtaElement.textContent = calculator.divide(value);
          break;
        case "total":
          rtaElement.textContent = calculator.getTotal();
          break;
        case "clear":
          rtaElement.textContent = calculator.clear();
          break;
      }

      globalValue = calculator.getTotal();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
