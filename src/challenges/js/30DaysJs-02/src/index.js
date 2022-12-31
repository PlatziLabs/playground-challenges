import "./styles.css";
import { isLeapYear } from "./exercise";

(() => {
  let year = 2023;

  document.getElementById("app").innerHTML = `
    <h2 id="title" >¿Es ${year} un año bisiesto?</h2>
    <input placeholder="Escribe un año" type="number" id="input">
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
  const title = document.getElementById("title");
  const input = document.getElementById("input");

  runBtn.addEventListener("click", () => {
    try {
      year = Number(input.value);
      title.textContent = `¿Es ${year} un año bisiesto?`;
      const rta = isLeapYear(year);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
