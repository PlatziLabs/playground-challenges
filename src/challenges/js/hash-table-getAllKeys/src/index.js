import "./styles.css";
import { Solution } from "./exercise";

(() => {
  const hashTable = new Solution(50);
  hashTable.set("Diego", 1990)
  hashTable.set("Mariana", 1998)
  hashTable.set("Miranda", 2000)
  hashTable.set("Cat", 2010)

  document.getElementById("app").innerHTML = `
    <h2>Get all keys</h2>
    <p>Tu hashTable: <code>${JSON.stringify(hashTable)}</code></p>
    <p><button id="btn">Get all keys</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(hashTable.getAllKeys());
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
