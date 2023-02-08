import "./styles.css";
import { wordExist } from "./exercise";

(() => {
  const board1 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  const board2 = [
    ["A", "M", "B", "E"],
    ["M", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  const word1 = "ABCEC";
  const word2 = "AMA";

  document.getElementById("app").innerHTML = `
    <h2>Word Search</h2>

    <p>Word 1: <code>${word1}</code></p>
    <p>Board 1: </p>
    <p><pre><code>[${board1.map(row => '\n ' + JSON.stringify(row, null, 0))} ${'\n'}]</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>

    <p>Word 2: <code>${word2}</code></p>
    <p>Board 2: </p>
    <p><pre><code>[${board2.map(row => '\n ' + JSON.stringify(row, null, 0))} ${'\n'}]</code></pre></p>
    <p><button id="btn2">Run Code</button><p/>
    <p><pre><code id="rta2"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const runBtn2 = document.getElementById('btn2');
  const rtaElement2 = document.getElementById('rta2');

  runBtn.addEventListener('click', () => {
    try {
      const rta = wordExist(board1, word1);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  });

  runBtn2.addEventListener('click', () => {
    try {
      const rta = wordExist(board2, word2);
      rtaElement2.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement2.innerHTML = JSON.stringify(error.message);
    }
  });
})();
