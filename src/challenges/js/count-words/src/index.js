import "./styles.css";
import { countWords } from "./exercise";

(() => {
  const array = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated"
  ];

  document.getElementById("app").innerHTML = `
    <h1>Count Words</h1>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = countWords(array);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
