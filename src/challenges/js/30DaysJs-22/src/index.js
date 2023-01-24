import "./styles.css";
import { Article, Service, Cart } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Cart products</h2>
    <div id="products">
    </div>
    <p>
      <select id="select" >
      </select>
      <button id="btn-delete">delete item</button>
    </p>
    <form id="form" >
      <p><input placeholder="name" type="text" name="product"></p>
      <p><input placeholder="price" type="number" name="price" ></p>
      <p><input placeholder="quantity" type="number" name="quantity"></p>
      <p><button type="submit">Add product</button></p>
    </form>
    <p><pre><code id="rta"></code></pre></p>
  `;

  let cart;
  let book;
  let course;

  const deleteButton = document.getElementById("btn-delete");
  const form = document.getElementById("form");
  const rtaElement = document.getElementById("rta");

  const products = document.getElementById("products");
  const select = document.getElementById("select");

  const printProducts = (cart) => {
    products.innerHTML = "";
    select.innerHTML = "";
    cart.products.map((item, id) => {
      products.innerHTML += `<p>${item.name} $${item.price} Q:${item.quantity}</p>`;
      select.innerHTML += `<option value=${id}>${item.name}</option>`;
    });
  };

  try {
    cart = new Cart();
    book = new Article("Libro", 120, 2);
    course = new Service("Curso", 100, 1);
    cart.addProduct(book);
    cart.addProduct(course);
    printProducts(cart);
  } catch (error) {
    rtaElement.innerHTML =
      "Los productos aparecerán una vez implementes la lógica de las clases 💪";
  }

  form.addEventListener("submit", (e) => {
    try {
      e.preventDefault();
      const productName = form.product.value;
      const price = Number(form.price.value);
      const quantity = Number(form.quantity.value);
      const newProduct = new Article(productName, price, quantity);
      cart.addProduct(newProduct);
      printProducts(cart);
      form.product.value = "";
      form.price.value = "";
      form.quantity.value = "";
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  deleteButton.addEventListener("click", () => {
    try {
      const id = Number(select.value);
      cart.deleteProduct(cart.products[id]);
      printProducts(cart);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
