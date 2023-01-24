import "./styles.css";
import { arrayModified } from "./exercise";

(() => {
  const array = [1, 2, 3, 4, 5, 6];
  arrayModified();
  document.getElementById("app").innerHTML = `
    <h2>Filter array</h2>
    <p>Array: </p>
    <p><pre><code>${JSON.stringify(array)}</code></pre></p>
    <p><button id="btn">Filter multiples of two </button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  runBtn.addEventListener("click", () => {
    try {
      const rta = array.myFilter((num) => num % 2 === 0);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
