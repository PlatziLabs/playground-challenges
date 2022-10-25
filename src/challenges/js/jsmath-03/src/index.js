import "./styles.css";
import { solution } from "./exercise";

(() => {
  const usersObj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
  };

  document.getElementById("app").innerHTML = `
    <h1>Transforma objetos en arrays</h1>
    <p>Objeto original: <code>${JSON.stringify(usersObj)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(usersObj));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
