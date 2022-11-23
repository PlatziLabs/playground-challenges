import "./styles.css";
import { getNames } from "./exercise";

(() => {
  const array = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    },
  ];

  document.getElementById("app").innerHTML = `
    <h2>Get Arrays with names</h2>
    <p>Example Array:</p>
    <p><pre><code>${JSON.stringify(array, null, 1)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const rta = getNames(array);
      rtaElement.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify();
    }
  });
})();
