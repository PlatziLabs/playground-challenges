import "./styles.css";
import { groupProducts } from "./exercise";

(() => {
  const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
    { name: "Chicken", category: "Food", price: 80 },
    { name: "Beef", category: "Food", price: 50 },
    { name: "PS5", category: "Gaming", price: 600 },
    { name: "Xbox One", category: "Gaming", price: 450 },
  ];

  document.getElementById("app").innerHTML = `
    <h2>group products</h2>
    <p>Products: </p>
    <div id="container">
    </div>
    <p><label for="category">Category:</label></p>
    <select id="categories" > 
      <option value="Electronics" >Electronics</option>
      <option value="Clothing" >Clothing</option>
      <option value="Food" >Food</option>
      <option value="Gaming" >Gaming</option>
    </select>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  const container = document.getElementById("container");
  const select = document.getElementById("categories");

  for (const product of products) {
    container.innerHTML += `
      <p><pre><code>${JSON.stringify(product)}</code></pre></p>
    `;
  }

  runBtn.addEventListener("click", () => {
    try {
      const value = select.value;
      const rta = groupProducts(products, value);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
