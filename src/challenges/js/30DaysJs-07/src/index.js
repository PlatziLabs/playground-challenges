import "./styles.css";
import { findLargestPalindrome } from "./exercise";

(() => {
  const words = ["racecar", "level", "world", "hello"];

  document.getElementById("app").innerHTML = `
    <h2>Encuentra el palindromo más grande</h2>
    <ul id="list" >
    </ul>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  const list = document.getElementById("list");
  words.map((word) => {
    list.innerHTML += `<li>${word}</li>`;
  });

  runBtn.addEventListener("click", () => {
    try {
      const rta = findLargestPalindrome(words);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
