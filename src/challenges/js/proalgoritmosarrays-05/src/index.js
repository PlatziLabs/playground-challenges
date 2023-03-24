import "./styles.css";
import { searchInRotatedArray } from "./exercise";

(() => {
  const arrayA = [4,5,6,7,0,1,2];
  const objetivoA = 3;
  const arrayB = [12,13,9,10,11];
  const objetivoB = 10;
  const arrayC = [1,2,3,4,5,6,7,8];
  const objetivoC = 3;

  document.getElementById("app").innerHTML = `
    <h2>Search in Rotated Arrays</h2>
    <p>Array A: </p>
    <p><pre><code>${JSON.stringify(arrayA)}</code></pre></p>
    <p><pre><code>${JSON.stringify(objetivoA)}</code></pre></p>
    <p><button id="btnA">Run Code</button><p/>
    <p><pre><code id="rtaA"></code></pre></p>

    <p>Array B: </p>
    <p><pre><code>${JSON.stringify(arrayB)}</code></pre></p>
    <p><pre><code>${JSON.stringify(objetivoB)}</code></pre></p>
    <p><button id="btnB">Run Code</button><p/>
    <p><pre><code id="rtaB"></code></pre></p>

    <p>Array C: </p>
    <p><pre><code>${JSON.stringify(arrayC)}</code></pre></p>
    <p><pre><code>${JSON.stringify(objetivoC)}</code></pre></p>
    <p><button id="btnC">Run Code</button><p/>
    <p><pre><code id="rtaC"></code></pre></p>
  `;

  const runBtnA = document.getElementById('btnA');
  const rtaElementA = document.getElementById('rtaA');

  const runBtnB = document.getElementById('btnB');
  const rtaElementB = document.getElementById('rtaB');

  const runBtnC = document.getElementById('btnC');
  const rtaElementC = document.getElementById('rtaC');

  runBtnA.addEventListener('click', () => {
    try {
      const rta = searchInRotatedArray(arrayA, objetivoA);
      rtaElementA.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElementA.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  runBtnB.addEventListener('click', () => {
    try {
      const rta = searchInRotatedArray(arrayB, objetivoB);
      rtaElementB.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElementB.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  runBtnC.addEventListener('click', () => {
    try {
      const rta = searchInRotatedArray(arrayC, objetivoC);
      rtaElementC.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElementC.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
