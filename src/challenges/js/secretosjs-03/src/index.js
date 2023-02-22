import "./styles.css";
import { Motor, History } from "./exercise";

(() => {
  const history = new History();
  const motorUp = new Motor("up", history);
  const motorDown = new Motor("down", history);
  const motorLeft = new Motor("left", history);
  const motorRight = new Motor("right", history);

  document.getElementById("app").innerHTML = `
    <h2>Manejo del Motor</h2>
    <p>
      <button id="btnUpOn">Turn On Motor Up</button>
      <button id="btnUpOff">Turn Off Motor Up</button>
    <p/>
    <p>
      <button id="btnDownOn">Turn On Motor Down</button>
      <button id="btnDownOff">Turn Off Motor Down</button>
    <p/>
    <p>
      <button id="btnLeftOn">Turn On Motor Left</button>
      <button id="btnLeftOff">Turn Off Motor Left</button>
    <p/>
    <p>
      <button id="btnRightOn">Turn On Motor Right</button>
      <button id="btnRightOff">Turn Off Motor Right</button>
    <p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const btnUpOn = document.getElementById('btnUpOn');
  const btnUpOff = document.getElementById('btnUpOff');
  const btnDownOn = document.getElementById('btnDownOn');
  const btnDownOff = document.getElementById('btnDownOff');
  const btnLeftOn = document.getElementById('btnLeftOn');
  const btnLeftOff = document.getElementById('btnLeftOff');
  const btnRightOn = document.getElementById('btnRightOn');
  const btnRightOff = document.getElementById('btnRightOff');
  const rtaElement = document.getElementById('rta');

  const showHistory = () => {
    const rta = history.getFullState();
    rtaElement.innerHTML = JSON.stringify(rta, null, 1);
  };
  
  btnUpOn.addEventListener('click', () => {
    try {
      motorUp.turnOn();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnUpOff.addEventListener('click', () => {
    try {
      motorUp.turnOff();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnDownOn.addEventListener('click', () => {
    try {
      motorDown.turnOn();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnDownOff.addEventListener('click', () => {
    try {
      motorDown.turnOff();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnLeftOn.addEventListener('click', () => {
    try {
      motorLeft.turnOn();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnLeftOff.addEventListener('click', () => {
    try {
      motorLeft.turnOff();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnRightOn.addEventListener('click', () => {
    try {
      motorRight.turnOn();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnRightOff.addEventListener('click', () => {
    try {
      motorRight.turnOff();
      showHistory();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
