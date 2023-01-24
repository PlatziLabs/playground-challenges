import "./styles.css";
import { Car } from "./exercise";

(() => {
  const toyota = new Car("Toyota", "Corolla", 2020, 0);

  document.getElementById("app").innerHTML = `
    <h2>Car details</h2>
    <p>Brand: <code>${toyota.brand}</code></p>
    <p>Model: <code>${toyota.model}</code> </p>
    <p>Year: <code>${toyota.year}</code></p>
    <p>Mileage: <code id="mileage">${toyota.mileage}</code> </p>
    <p>State: <code id="state">${toyota.state}</code> </p>
    <p><button id="btn-on">Turn on car</button><p/>
    <p><button id="btn-off">Turn off car</button><p/>
    <p><input id="value" placeholder="write a mileage"> <p/>
    <p><button id="btn-drive">Drive</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const btnOn = document.getElementById("btn-on");
  const btnOff = document.getElementById("btn-off");
  const btnDrive = document.getElementById("btn-drive");
  const inputMileage = document.getElementById("value");

  const state = document.getElementById("state");
  const mileage = document.getElementById("mileage");

  const rtaElement = document.getElementById("rta");

  btnOn.addEventListener("click", () => {
    try {
      toyota.turnOn();
      state.innerHTML = toyota.state;
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnOff.addEventListener("click", () => {
    try {
      toyota.turnOff();
      state.innerHTML = toyota.state;
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  btnDrive.addEventListener("click", () => {
    try {
      const value = Number(inputMileage.value);
      toyota.drive(value);
      mileage.innerHTML = toyota.mileage;
      rtaElement.innerHTML = "";
    } catch (error) {
      rtaElement.innerHTML = error.message;
    }
  });
})();
