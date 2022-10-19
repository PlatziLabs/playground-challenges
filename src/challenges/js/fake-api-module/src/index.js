import "./styles.css";
import { solution } from "./exercise";

(() => {

  document.getElementById("app").innerHTML = `
    <h1>Get a list of movies</h1>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution());
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
