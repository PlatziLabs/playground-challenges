import "./styles.css";
import { Solution } from "./exercise";

(() => {
  const hashTable = new Solution(50)
  hashTable.set("Diego", 1990)
  hashTable.set("Mariana", 1998)
  hashTable.set("Adriana", 2000)

  document.getElementById("app").innerHTML = `
    <h2>Delete in hash tables</h2>
    <p>Hash table: <code id="data" >${JSON.stringify(hashTable.data)}</code></p>
    <input type="text" placeholder="Write a key to delete" id="input" value="Diego" />
    <button id="btn">Delete</button>
    <p><pre><code id="rta">Element deleted 👇</code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const input = document.getElementById('input')
  const data = document.getElementById("data")

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = `Element deleted 👇
      ${JSON.stringify(hashTable.delete(input.value))}
      `;
      data.innerHTML = JSON.stringify(hashTable.data)
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
