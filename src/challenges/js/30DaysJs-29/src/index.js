import "./styles.css";
import { BasicProduct } from "./exercise";
import { WarrantyDecorator } from "./WarrantyDecorator";
import { ShippingInsuranceDecorator } from "./ShippingInsurance";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Agrega seguros a tus productos</h2>

    <label for="price">Precio:</label>
    <input type="number" id="price" value="100"><br><br>

    <label for="description">Descripción:</label>
    <input type="text" id="description" value="Producto de ejemplo"><br><br>

    <label for="warranty">Garantía:</label>
    <input type="checkbox" id="warranty"><br><br>

    <label for="insurance">Seguro de envío:</label>
    <input type="checkbox" id="insurance"><br><br>

    <button id="submit">Obtener detalles</button><br><br>

    <h3>Detalles del producto:</h3>
    <p id="product-details"></p>

    <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaElement = document.getElementById("rta");

  const priceInput = document.getElementById("price");
  const descriptionInput = document.getElementById("description");
  const warrantyInput = document.getElementById("warranty");
  const insuranceInput = document.getElementById("insurance");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", () => {
    try {
      const price = Number(priceInput.value);
      const description = descriptionInput.value;
      let product = new BasicProduct(price, description);

      if (warrantyInput.checked) {
        product = new WarrantyDecorator(product);
      }

      if (insuranceInput.checked) {
        product = new ShippingInsuranceDecorator(product);
      }

      rtaElement.innerHTML = `Precio: $${product.getPrice()} - Descripción: ${product.getDescription()}`;
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
