import "./styles.css";
import { calcTotal } from "./exercise";

(() => {
  const array = [
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 20,
      delivered: false,
    }
  ];

  document.getElementById("app").innerHTML = `
    <h2>Calc total</h2>
    <p>Array</p>
    <p><pre><code>${JSON.stringify(array, null, 1)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const rta = calcTotal(array);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
