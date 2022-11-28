import "./styles.css";
import { getId } from "./exercise";

(() => {

  document.getElementById("app").innerHTML = `
    <h2>Generador de ID</h2>
    <p><button id="btn">Generate 10 ID</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {

    try {

      const genId = getId();
      const generatedId = [];

      for (let i = 0; i < 10; i++)
        generatedId.push(genId.next().value);

      rtaElement.innerHTML = JSON.stringify(generatedId);

    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
