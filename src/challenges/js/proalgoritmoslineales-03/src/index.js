import "./styles.css";
import { Nodo, isPalindrome } from "./exercise";

(() => {
  const nodo1 = new Nodo("a");
  const nodo2 = new Nodo("b");
  const nodo3 = new Nodo("a");
  nodo1.siguiente = nodo2;
  nodo2.siguiente = nodo3;

  const nodo1b = new Nodo("a");
  const nodo2b = new Nodo("a");
  const nodo3b = new Nodo("b");
  const nodo4b = new Nodo("a");
  nodo1b.siguiente = nodo2b;
  nodo2b.siguiente = nodo3b;
  nodo3b.siguiente = nodo4b;

  document.getElementById("app").innerHTML = `
    <h2>Palindrome Linked List</h2>

    <p>Cabeza de la lista A: </p>
    <p><pre><code>${JSON.stringify(nodo1, null, 1)}</code></pre></p>

    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>

    <p>Cabeza de la lista B: </p>
    <p><pre><code>${JSON.stringify(nodo1b, null, 1)}</code></pre></p>

    <p><button id="btnb">Run Code</button><p/>
    <p><pre><code id="rtab"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  const runBtnB = document.getElementById('btnb');
  const rtaElementB = document.getElementById('rtab');

  runBtn.addEventListener('click', () => {
    try {
      const clonNodo1 = JSON.parse(JSON.stringify(nodo1));
      const rta = isPalindrome(clonNodo1);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });

  runBtnB.addEventListener('click', () => {
    try {
      const clonNodo1b = JSON.parse(JSON.stringify(nodo1b));
      const rta = isPalindrome(clonNodo1b);
      rtaElementB.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElementB.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });
})();
