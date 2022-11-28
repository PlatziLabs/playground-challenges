import "./styles.css";
import { solution } from "./exercise";

(() => {
  const cars = [
    { color: 'red', brand: 'Kia', },
    { color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111', },
    { licensePlate: 'RGB255', },
  ];

  document.getElementById("app").innerHTML = `
    <h2>Arregla el bug</h2>
    <p>Array con carros de prueba:</p>
    <pre><code>${JSON.stringify(cars, null, 1)}</code></pre>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(cars), null, 1);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
