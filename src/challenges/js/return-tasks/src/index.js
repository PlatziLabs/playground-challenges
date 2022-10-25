import { runCode } from './exercise';

(async () => {
  const rta = await runCode();
  document.getElementById("app").innerHTML = `<p>Rta from runCode: ${rta}</p>`;
})();
