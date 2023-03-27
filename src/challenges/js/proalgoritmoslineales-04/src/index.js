import "./styles.css";
import { Nodo, reorderList } from "./exercise";

(() => {
  const nodo1 = new Nodo(1);
  const nodo2 = new Nodo(2);
  const nodo3 = new Nodo(3);
  nodo1.siguiente = nodo2;
  nodo2.siguiente = nodo3;

  const nodo1b = new Nodo(1);
  const nodo2b = new Nodo(2);
  const nodo3b = new Nodo(3);
  const nodo4b = new Nodo(4);
  nodo1b.siguiente = nodo2b;
  nodo2b.siguiente = nodo3b;
  nodo3b.siguiente = nodo4b;

  const nodo1c = new Nodo(1);
  const nodo2c = new Nodo(2);
  const nodo3c = new Nodo(3);
  const nodo4c = new Nodo(4);
  const nodo5c = new Nodo(5);
  const nodo6c = new Nodo(6);
  const nodo7c = new Nodo(7);
  const nodo8c = new Nodo(8);
  nodo1c.siguiente = nodo2c;
  nodo2c.siguiente = nodo3c;
  nodo3c.siguiente = nodo4c;
  nodo4c.siguiente = nodo5c;
  nodo5c.siguiente = nodo6c;
  nodo6c.siguiente = nodo7c;
  nodo7c.siguiente = nodo8c;

  document.getElementById("app").innerHTML = `
    <h2>Reorder List Without Repeated Values</h2>

    <p>Lista A: </p>
    <p><pre><code>${JSON.stringify(nodo1, null, 1)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>

    <p>Lista B: </p>
    <p><pre><code>${JSON.stringify(nodo1b, null, 1)}</code></pre></p>
    <p><button id="btn2">Run Code</button><p/>
    <p><pre><code id="rta2"></code></pre></p>
    <p><pre><code id="rta"></code></pre></p>

    <p>Lista C: </p>
    <p><pre><code>${JSON.stringify(nodo1c, null, 1)}</code></pre></p>
    <p><button id="btn3">Run Code</button><p/>
    <p><pre><code id="rta3"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      const clon = JSON.parse(JSON.stringify(nodo1));
      const rta = reorderList(clon);
      rtaElement.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });

  const runBtn2 = document.getElementById('btn2');
  const rtaElement2 = document.getElementById('rta2');

  runBtn2.addEventListener('click', () => {
    try {
      const clon = JSON.parse(JSON.stringify(nodo1b));
      const rta = reorderList(clon);
      rtaElement2.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement2.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });

  const runBtn3 = document.getElementById('btn3');
  const rtaElement3 = document.getElementById('rta3');

  runBtn3.addEventListener('click', () => {
    try {
      const clon = JSON.parse(JSON.stringify(nodo1c));
      const rta = reorderList(clon);
      rtaElement3.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement3.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });
})();
