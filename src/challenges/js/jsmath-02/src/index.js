import "./styles.css";
import { solution } from "./exercise";

(() => {
  const id1 = 456;
  const users = [];
  users.push({ id: 123, name: 'Juanito Alcachofa' });
  users.push({ id: 456, name: 'Juanita Alcaparra' });

  const id2 = 999;


  document.getElementById("app").innerHTML = `
    <h2>Encuentra el ID</h2>
    <p>Lista de usuarios: <code>${JSON.stringify(users)}</code></p>
    <p>ID en búsqueda 1: <code>${JSON.stringify(id1)}</code></p>
    <p>ID en búsqueda 2: <code>${JSON.stringify(id2)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = solution(users, id1);
      rtaElement.innerHTML += '<br>';
      rtaElement.innerHTML += solution(users, id2);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
