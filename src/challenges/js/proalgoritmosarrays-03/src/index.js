import "./styles.css";
import { maxArea } from "./exercise";

(() => {
  const alturas1 = [1,8,6,2,5,4,8,3,7];
  const alturas2 = [8,1,6,2,5,4,1,3,7];

  document.getElementById("app").innerHTML = `
    <h2>Container With Most Water</h2>

    <p>Array de Alturas 1: </p>
    <p><pre><code>${JSON.stringify(alturas1)}</code></pre></p>
    <p><pre><code id="rta1"></code></pre></p>

    <p>Array de Alturas 2: </p>
    <p><pre><code>${JSON.stringify(alturas2)}</code></pre></p>
    <p><pre><code id="rta2"></code></pre></p>

    <p><button id="btn">Run Code</button><p/>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement1 = document.getElementById('rta1');
  const rtaElement2 = document.getElementById('rta2');

  runBtn.addEventListener('click', () => {
    try {
      const rta1 = maxArea(alturas1);
      const rta2 = maxArea(alturas2);
      rtaElement1.innerHTML = JSON.stringify(rta1);
      rtaElement2.innerHTML = JSON.stringify(rta2);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
