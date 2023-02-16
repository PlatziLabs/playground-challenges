import "./styles.css";
import { countNumbers } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h3>Contador de números</h3>
    <form id="count-form">
      <p><label for="count">Contar hasta:</label></p>
      <p><input type="number" id="count" name="count" min=1 ></p>
      <p><button type="submit">Iniciar conteo</button></p>
    </form>
    <ul id= "number-list"></ul>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaElement = document.getElementById("rta");

  const form = document.getElementById("count-form");
  const numberList = document.getElementById("number-list");

  form.addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const count = parseInt(document.getElementById("count").value);

      numberList.innerHTML = "";

      countNumbers(count, (number) => {
        const listItem = document.createElement("li");
        listItem.innerText = number;
        numberList.appendChild(listItem);
      });
    } catch (err) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
