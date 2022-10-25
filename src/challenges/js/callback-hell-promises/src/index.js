import { runCode } from './exercise';

(async () => {
  const rta = await runCode();
  document.getElementById("app").innerHTML = `
    <h1>Refactor Challenge</h1>
    <p>Result from exec runCode: ${rta}</p>
  `;
})();
