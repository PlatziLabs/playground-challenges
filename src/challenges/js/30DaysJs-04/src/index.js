import "./styles.css";
import { printTriangle } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Dibuja un triangulo usando bucles</h2>
    <label for="size">Tamaño del triangulo</label>
    <input name="size" id="size" type="number" min=1 placeholder="Escribe un número" >
    <label for="character">Caracter del triangulo</label>
    <input name="character" id="character" type="text"  placeholder="Escribe un caracter" >
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const size = document.getElementById('size').value
      const character = document.getElementById("character").value
      let rta = printTriangle(size, character);
      rta = rta.split("\n")
      rtaElement.innerHTML = ""
      rta.map(row => {
        rtaElement.innerHTML += `<p>${JSON.stringify(row)}</p>`
      })
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
