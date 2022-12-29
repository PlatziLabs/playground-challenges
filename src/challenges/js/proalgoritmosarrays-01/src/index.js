import "./styles.css";
import { isAlienSorted } from "./exercise";

(() => {
  const words1 = ["habito", "hacer", "lectura", "sonreir"];
  const order1 = "hlabcdfgijkmnopqrstuvwxyz";

  const words2 = ["habito", "hacer", "sonreir", "lectura"];
  const order2 = "hlabcdfgijkmnopqrstuvwxyz";

  const words3 = ["conocer", "cono"];
  const order3 = "abcdefghijkmnopqrstuvwxyz";

  document.getElementById("app").innerHTML = `
    <h2>Verifying Alien Dictionary</h2>

    <p>Array de palabras 1: </p>
    <p><pre><code>${JSON.stringify(words1)}</code></pre></p>
    <p>Diccionario alielígena 1: </p>
    <p><pre><code>${JSON.stringify(order1)}</code></pre></p>

    <p><button id="btn1">Probar código</button><p/>
    <p><pre><code id="rta1"></code></pre></p>

    <br>

    <p>Array de palabras 2: </p>
    <p><pre><code>${JSON.stringify(words2)}</code></pre></p>
    <p>Diccionario alielígena 2: </p>
    <p><pre><code>${JSON.stringify(order2)}</code></pre></p>
    
    <p><button id="btn2">Probar código</button><p/>
    <p><pre><code id="rta2"></code></pre></p>

    <br>

    <p>Array de palabras 3: </p>
    <p><pre><code>${JSON.stringify(words3)}</code></pre></p>
    <p>Diccionario alielígena 3: </p>
    <p><pre><code>${JSON.stringify(order3)}</code></pre></p>

    <p><button id="btn3">Probar código</button><p/>
    <p><pre><code id="rta3"></code></pre></p>

    <br>
  `;

  const runBtn1 = document.getElementById('btn1');
  const rtaElement1 = document.getElementById('rta1');
  const runBtn2 = document.getElementById('btn2');
  const rtaElement2 = document.getElementById('rta2');
  const runBtn3 = document.getElementById('btn3');
  const rtaElement3 = document.getElementById('rta3');

  runBtn1.addEventListener('click', () => {
    try {
      const rta1 = isAlienSorted(words1, order1);
      rtaElement1.innerHTML = JSON.stringify(rta1);
    } catch (error) {
      rtaElement1.innerHTML = JSON.stringify("Error: " + error, null, 1);
    }
  });

  runBtn2.addEventListener('click', () => {
    try {
      const rta2 = isAlienSorted(words2, order2);
      rtaElement2.innerHTML = JSON.stringify(rta2);
    } catch (error) {
      rtaElement2.innerHTML = JSON.stringify("Error: " + error, null, 1);
    }
  });

  runBtn3.addEventListener('click', () => {
    try {
      const rta3 = isAlienSorted(words3, order3);
      rtaElement3.innerHTML = JSON.stringify(rta3);
    } catch (error) {
      rtaElement3.innerHTML = JSON.stringify("Error: " + error, null, 1);
    }
  });
})();
