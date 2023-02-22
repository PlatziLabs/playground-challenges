import "./styles.css";
import { processPay } from "./exercise";
import { PayPal } from "./PayPal.class.js";
import { Card } from "./Card.class.js";
import { Cash } from "./Cash.class.js";

(() => {
  const paypal = new PayPal("test@mail.com");
  const card = new Card("4913478952471122");
  const cash = new Cash();

  try {
    document.getElementById("app").innerHTML = `
    <h2>Pay system</h2>
    <p>PayPal: </p>
    <p><pre><code>Email: ${paypal.email}</code></pre></p>
    <p><button id="btn-paypal">Pagar 229 con PayPal</button><p/>
    <p><pre><code id="rta-paypal"></code></pre></p>
    <p>Card: </p>
    <p><pre><code>Card number: ${card.cardNumber}</code></pre></p>
    <p><button id="btn-card">Pagar 129 con tarjeta</button><p/>
    <p><pre><code id="rta-card"></code></pre></p>
    <p>Cash: </p>
    <p><pre><code></code></pre></p>
    <p><button id="btn-cash">Pagar 123 con Efectivo</button><p/>
    <p><pre><code id="rta-cash"></code></pre></p>
  `;

    const runBtnCard = document.getElementById("btn-card");
    const runBtnPayPal = document.getElementById("btn-paypal");
    const runBtnCash = document.getElementById("btn-cash");
    const rtaElementCard = document.getElementById("rta-card");
    const rtaElementPayPal = document.getElementById("rta-paypal");
    const rtaElementCash = document.getElementById("rta-cash");

    runBtnCard.addEventListener("click", () => {
      try {
        const rta = processPay(card, 129);
        rtaElementCard.innerHTML = JSON.stringify(rta);
      } catch (error) {
        rtaElementCard.innerHTML = JSON.stringify(error, null, 1);
      }
    });

    runBtnPayPal.addEventListener("click", () => {
      try {
        const rta = processPay(paypal, 229);
        rtaElementPayPal.innerHTML = JSON.stringify(rta);
      } catch (error) {
        rtaElementPayPal.innerHTML = JSON.stringify(error, null, 1);
      }
    });

    runBtnCash.addEventListener("click", () => {
      try {
        const rta = processPay(cash, 123);
        rtaElementCash.innerHTML = JSON.stringify(rta);
      } catch (error) {
        rtaElementCash.innerHTML = JSON.stringify(error, null, 1);
      }
    });
  } catch (error) {
    document.getElementById("app").innerHTML = `
    <p><pre><code id="rta">Esta vista debería mostrar datos una vez soluciones el problema 💪</code></pre></p>`;
  }
})();
