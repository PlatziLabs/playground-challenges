import "./styles.css";
import { Nodo, oddEvenList } from "./exercise";

(() => {
  const nodo1 = new Nodo(1);
  const nodo2 = new Nodo(2);
  const nodo3 = new Nodo(3);
  const nodo4 = new Nodo(4);
  nodo1.siguiente = nodo2;
  nodo2.siguiente = nodo3;
  nodo3.siguiente = nodo4;

  document.getElementById("app").innerHTML = `
    <h2>Odd Even Linked List</h2>

    <p>Lista Enlazada Original: </p>
    <p><pre><code>${JSON.stringify(nodo1, null, 1)}</code></pre></p>

    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const clonNodo1 = JSON.parse(JSON.stringify(nodo1));
      const rta = oddEvenList(clonNodo1);
      rtaElement.innerHTML = "Lista Enlazada Reordenada: \n";
      rtaElement.innerHTML += JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
