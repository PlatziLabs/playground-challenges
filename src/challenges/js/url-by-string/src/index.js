import "./styles.css";
import { parseToURL } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h1>Parse URL</h1>
    <p>Title</p>
    <p><input id="title" value="La API para nunca parar de aprender" type="text" /></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const titleElement = document.getElementById("title");

  runBtn.addEventListener('click', () => {
    try {
      const title = titleElement.value;
      rtaElement.innerHTML = parseToURL(title);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
