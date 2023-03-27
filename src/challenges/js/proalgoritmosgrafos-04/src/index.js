import "./styles.css";
import { orangesRotting } from "./exercise";

(() => {
  const cultivo1 = [
    [2,1,1],
    [1,1,0],
    [0,1,1],
  ];
  const cultivo2 = [
    [2,1,0],
    [1,0,0],
    [1,0,1],
  ];

  document.getElementById("app").innerHTML = `
    <h2>Rotting Oranges</h2>

    <p>Cultivo 1: </p>
    <p><pre><code>[${cultivo1.map(row => '\n ' + JSON.stringify(row, null, 0))} ${'\n'}]</code></pre></p>

    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>

    <p>Cultivo 2: </p>
    <p><pre><code>[${cultivo2.map(row => '\n ' + JSON.stringify(row, null, 0))} ${'\n'}]</code></pre></p>

    <p><button id="btn2">Run Code</button><p/>
    <p><pre><code id="rta2"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  const runBtn2 = document.getElementById('btn2');
  const rtaElement2 = document.getElementById('rta2');

  runBtn.addEventListener('click', () => {
    try {
      const clon = JSON.parse(JSON.stringify(cultivo1));
      const rta = orangesRotting(clon);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message, null, 1);
      console.error(error)
    }
  });

  runBtn2.addEventListener('click', () => {
    try {
      const clon = JSON.parse(JSON.stringify(cultivo2));
      const rta = orangesRotting(clon);
      rtaElement2.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement2.innerHTML = JSON.stringify(error.message, null, 1);
      console.error(error)
    }
  });
})();
