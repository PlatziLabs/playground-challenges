import "./styles.css";
import { solution } from "./exercise";

(() => {
  const json1 = {
    name: "Atena",
    food: "Leche"
  };
  const json2 = {
    age: 2,
    color: "Café"
  }

  document.getElementById("app").innerHTML = /*html*/`
    <h1></h1>
    <p>JSON 1: <code>${JSON.stringify(json1)}</code></p>
    <p>JSON 2: <code>${JSON.stringify(json2)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(solution(json1, json2));
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
