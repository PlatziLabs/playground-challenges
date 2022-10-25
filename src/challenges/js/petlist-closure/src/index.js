import "./styles.css";
import { createPetList } from "./exercise";

(() => {
  const cat = "michi"
  const dog = "firulais"

  document.getElementById("app").innerHTML = `
    <h1>Add pets to the petlist</h1>
    <p>Array A: <code>${JSON.stringify(cat)}</code></p>
    <p>Array B: <code>${JSON.stringify(dog)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      let petList = createPetList()
      petList(cat)
      petList(dog)
      rtaElement.innerHTML = petList().join(" ")
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
