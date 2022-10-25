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
    <h1>Get Arrays with names</h1>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(getNames(array));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
