import "./styles.css";
import { searchValue } from "./exercise";

(() => {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  document.getElementById("app").innerHTML = `
    <h2>Search value</h2>
    <p>Array </p>
    <p><pre><code>[</code></pre></p>
    <p><pre><code>  ${JSON.stringify(array[0])}</code></pre></p>
    <p><pre><code>  ${JSON.stringify(array[1])}</code></pre></p>
    <p><pre><code>  ${JSON.stringify(array[2])}</code></pre></p>
    <p><pre><code>]</code></pre></p>
    <p>Valor buscado 👇</p>
    <p><input placeholder="escribe un valor"></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
  const input = document.querySelector("input");

  runBtn.addEventListener("click", () => {
    try {
      const value = Number(input.value);
      const rta = searchValue(array, value);
      rtaElement.innerHTML = `${JSON.stringify(rta)} Value: ${
        array[rta.row][rta.column]
      } `;
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  });
})();
