import { runCode } from './exercise';

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Refactor Challenge</h2>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', async() => {
    try {
      const rta = await runCode();
      rtaElement.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
