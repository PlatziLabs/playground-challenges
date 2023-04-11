import "./styles.css";
import { removeDuplicates } from "./exercise";

(() => {
  const array = [
    "melon",
    "melon",
    "mango",
    "banana",
    "apple",
    "banana",
    "apple",
  ];

  document.getElementById("app").innerHTML = `
    <h2>remove duplicates</h2>
    <p>Original Array: </p>
    <p><pre><code>${JSON.stringify(array)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  runBtn.addEventListener("click", () => {
    try {
      const rta = removeDuplicates(array);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
