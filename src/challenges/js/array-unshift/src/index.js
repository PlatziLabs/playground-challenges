import "./styles.css";
import { MyArray } from "./exercise";

(() => {
  const myArray = new MyArray();

  document.getElementById("app").innerHTML = `
    <h2>Test your unshift implementation</h2>
    <p>myArray: <code id="rta" >${JSON.stringify(myArray.data)}</code></p>
    <input type="text" placeholder="Write something" id="input" >
    <button id="btn">Add to array</button>
    <p id="err"></p>
  `;

  const runBtn = document.getElementById('btn');
  const err = document.getElementById("err")
  const rtaElement = document.getElementById('rta');
  const input = document.getElementById("input")

  runBtn.addEventListener('click', () => {
    try {
      myArray.unshift(input.value)
      rtaElement.innerHTML = JSON.stringify(myArray);
    } catch (error) {
      err.innerHTML = error;
    }
  });
})();
