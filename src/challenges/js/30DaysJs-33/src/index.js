import "./styles.css";
import { MyArray } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <div>
      <p>Ingresa un valor para agregarlo al array</p>
      <p><input type="text" id="input-item" placeholder="Value" /></p>
      <p><button id="map-btn">Map * 2</button></p>
      <p><button id="filter-btn">Filter / 2</button></p>
      <p><button id="push-btn">Push</button></p>
      <p><button id="pop-btn">Pop</button></p>
      <p><button id="join-btn">Join</button></p>
      <p><button id="shift-btn">Shift</button></p>
      <p><button id="unshift-btn">Unshift</button></p>
    </div>  
    <p><pre><code>Current array</code></pre></p>
    <p><pre><code id="current-array"></code></pre></p>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const input = document.getElementById("input-item");
  const mapBtn = document.getElementById("map-btn");
  const filterBtn = document.getElementById("filter-btn");
  const pushBtn = document.getElementById("push-btn");
  const popBtn = document.getElementById("pop-btn");
  const joinBtn = document.getElementById("join-btn");
  const unshiftBtn = document.getElementById("unshift-btn");
  const shiftBtn = document.getElementById("shift-btn");
  const rtaElement = document.getElementById("rta");
  const currentArray = document.getElementById("current-array");

  const array = new MyArray();

  mapBtn.addEventListener("click", () => {
    try {
      const rta = array.map((item) => item * 2);
      rtaElement.innerHTML = JSON.stringify(rta);
      currentArray.innerHTML = JSON.stringify(array.data);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  filterBtn.addEventListener("click", () => {
    try {
      const rta = array.filter((item) => item % 2 === 0);
      rtaElement.innerHTML = JSON.stringify(rta);
      currentArray.innerHTML = JSON.stringify(array.data);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  pushBtn.addEventListener("click", () => {
    try {
      const value = input.value;
      const rta = array.push(value);
      rtaElement.innerHTML = JSON.stringify(rta);
      currentArray.innerHTML = JSON.stringify(array.data);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  popBtn.addEventListener("click", () => {
    try {
      const rta = array.pop();
      rtaElement.innerHTML = JSON.stringify(rta);
      currentArray.innerHTML = JSON.stringify(array.data);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  joinBtn.addEventListener("click", () => {
    try {
      const rta = array.join(", ");
      rtaElement.innerHTML = JSON.stringify(rta);
      currentArray.innerHTML = JSON.stringify(array.data);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  shiftBtn.addEventListener("click", () => {
    try {
      const rta = array.shift();
      rtaElement.innerHTML = JSON.stringify(rta);
      currentArray.innerHTML = JSON.stringify(array.data);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  unshiftBtn.addEventListener("click", () => {
    try {
      const value = input.value;
      const rta = array.unshift(value);
      rtaElement.innerHTML = JSON.stringify(rta);
      currentArray.innerHTML = JSON.stringify(array.data);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
