import "./styles.css";
import { sortByAvailabilityAndPrice } from "./exercise";

(() => {
  const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
  ];

  document.getElementById("app").innerHTML = `
    <h2>Sort products</h2>
    <p>Products: </p>
    <p><pre><code id="products"></code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
  const productsContainer = document.getElementById("products");

  products.map((product) => {
    productsContainer.innerHTML += `<p>${JSON.stringify(product)}</p>`;
  });

  runBtn.addEventListener("click", () => {
    try {
      const rta = sortByAvailabilityAndPrice(products);
      rtaElement.innerHTML = "";
      rta.map((item) => {
        rtaElement.innerHTML += `<p>${JSON.stringify(item)}</p>`;
      });
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
