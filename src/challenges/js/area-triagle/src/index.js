import "./styles.css";
import { triangleArea } from "./exercise";

(() => {

  document.getElementById("app").innerHTML = `
  <h1>Triangle Area</h1>
  <p>Base: </p>
  <p><input id="base" value="0" placeholder="Type value" /></p>
  <p>Height:</p>
  <p><input id="height" value="0" placeholder="Type value"  /></p>
  <p><button id="btn" type="button">runCode</button></p>
  <p><pre><code id="code"></code></pre></p>
  `;

  document.getElementById('btn').addEventListener('click', () => {
    try {
      const base = parseInt(document.getElementById('base').value, 10);
      const height = parseInt(document.getElementById('height').value, 10);;
      const rta = triangleArea(base, height);
      document.getElementById('code').innerHTML = rta;
    } catch (error) {
      document.getElementById('code').innerHTML = error;
    }
  })




})();
