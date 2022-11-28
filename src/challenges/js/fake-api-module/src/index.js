import "./styles.css";
import { solution } from "./exercise";

(() => {

  document.getElementById("app").innerHTML = `
    <h2>Get a list of movies</h2>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', async () => {
    try {
      rtaElement.innerHTML = JSON.stringify(await solution());
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
