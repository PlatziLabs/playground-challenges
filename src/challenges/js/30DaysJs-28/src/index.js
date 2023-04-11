import "./styles.css";
import { CarBuilder } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <form>
      <p><label for="year">Año:</label></p>
      <p><input type="number" id="year" name="year" required></p>

      <p><label for="model">Modelo:</label></p>
      <p><input type="text" id="model" name="model" required></p>

      <p><label for="brand">Marca:</label></p>
      <p><input type="text" id="brand" name="brand" required></p>

      <p><label for="color">Color:</label></p>
      <p><input type="text" id="color" name="color" required></p>

      <p><label for="price">Precio:</label></p>
      <input type="number" id="price" name="price" required></p>

      <label for="isAvailable">Disponible:</label>
      <input type="checkbox" id="isAvailable" name="isAvailable">

      <p><button type="button" id="build">Construir</button></p>
    </form>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const rta = document.getElementById("rta");

  const yearInput = document.querySelector("#year");

  const modelInput = document.querySelector("#model");
  const brandInput = document.querySelector("#brand");
  const colorInput = document.querySelector("#color");
  const priceInput = document.querySelector("#price");
  const isAvailableInput = document.querySelector("#isAvailable");
  const buildButton = document.querySelector("#build");

  buildButton.addEventListener("click", () => {
    try {
      const carBuilder = new CarBuilder();
      carBuilder
        .setYear(yearInput.value)
        .setModel(modelInput.value)
        .setBrand(brandInput.value)
        .setColor(colorInput.value)
        .setPrice(priceInput.value)
        .setIsAvailable(isAvailableInput.checked);

      const car = carBuilder.build();
      rta.innerText = JSON.stringify(car, null, 2);
    } catch (error) {
      rta.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
