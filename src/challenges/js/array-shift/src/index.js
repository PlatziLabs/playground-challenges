import "./styles.css";
import { BetterArray } from "./exercise";

(() => {
  const betterArray = new BetterArray();
  betterArray.unshift("Lograste!!")
  betterArray.unshift('Lo')
  betterArray.unshift("Este item debe desaparecer ❌")

  document.getElementById("app").innerHTML = `
    <h2>Array shift</h1>
    <p>Better array: <code id="arr">${JSON.stringify(betterArray.data)}</code></p>
    <p><button id="btn">Delete first element</button><p/>
    <p><pre><code id="rta">Aquí aparecerá el item que eliminaste 👇</code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const arrElement = document.getElementById('arr')
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = `Aquí aparecerá el item que eliminaste 👇
      ${JSON.stringify(betterArray.shift())}
      `;
      arrElement.innerHTML = JSON.stringify(betterArray.data)
    } catch (error) {
      rtaElement.innerHTML = `🚧${error}🚧`;
    }
  });
})();
