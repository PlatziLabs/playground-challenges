import "./styles.css";
import { restoreIpAddresses } from "./exercise";

(() => {
  const s1 = "25525511135";
  const s2 = "19216801";
  const s3 = "01921181";

  document.getElementById("app").innerHTML = `
    <h2>Restore IP Addresses</h2>

    <p>String 1: </p>
    <p><pre><code>${JSON.stringify(s1)}</code></pre></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>

    <p>String 2: </p>
    <p><pre><code>${JSON.stringify(s2)}</code></pre></p>
    <p><button id="btn2">Run Code</button><p/>
    <p><pre><code id="rta2"></code></pre></p>

    <p>String 3: </p>
    <p><pre><code>${JSON.stringify(s3)}</code></pre></p>
    <p><button id="btn3">Run Code</button><p/>
    <p><pre><code id="rta3"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');
  const runBtn2 = document.getElementById('btn2');
  const rtaElement2 = document.getElementById('rta2');
  const runBtn3 = document.getElementById('btn3');
  const rtaElement3 = document.getElementById('rta3');

  runBtn.addEventListener('click', () => {
    try {
      const rta = restoreIpAddresses(s1);
      rtaElement.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });

  runBtn2.addEventListener('click', () => {
    try {
      const rta = restoreIpAddresses(s2);
      rtaElement2.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement2.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });

  runBtn3.addEventListener('click', () => {
    try {
      const rta = restoreIpAddresses(s3);
      rtaElement3.innerHTML = JSON.stringify(rta, null, 1);
    } catch (error) {
      rtaElement3.innerHTML = JSON.stringify(error.message, null, 1);
    }
  });
})();
