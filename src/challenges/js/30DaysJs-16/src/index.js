import "./styles.css";
import { processShoppingList } from "./exercise";

(() => {
  const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
  ];

  document.getElementById("app").innerHTML = `
    <h2>Process shopping list</h2>
    <p>Shopping list: </p>
    <p><pre><code>[</code></pre></p>
    <div id="data">
      <p><pre><code>  ${JSON.stringify(shoppingList[0])}</code></pre></p>
      <p><pre><code>  ${JSON.stringify(shoppingList[1])}</code></pre></p>
      <p><pre><code>  ${JSON.stringify(shoppingList[2])}</code></pre></p>
    </div>
    <p><pre><code>]</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
  const data = document.getElementById("data");

  runBtn.addEventListener("click", () => {
    try {
      if (shoppingList[0].quantity) {
        const rta = processShoppingList(shoppingList);
        rtaElement.innerHTML = `Total: ${rta}`;
        data.innerHTML = `
          <p><pre><code>  ${JSON.stringify(shoppingList[0])}</code></pre></p>
          <p><pre><code>  ${JSON.stringify(shoppingList[1])}</code></pre></p>
          <p><pre><code>  ${JSON.stringify(shoppingList[2])}</code></pre></p>
        `;
      }
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
