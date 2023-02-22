import "./styles.css";
import { Astronaut, SpaceShip, simulador } from "./exercise";

(() => {
  const rocket99 = new SpaceShip({ key: "AK990_1" });

  const capitandc = new Astronaut({ name: "Capitán DC" });
  rocket99.getAccessKey(capitandc);

  const comandanteJuanita = new Astronaut({ name: "Comandante Juanita" });
  comandanteJuanita._spaceShipKey = capitandc._spaceShipKey;

  const capitanimpostor = {
    name: "Capitán Impostor",
    _spaceShipKey: rocket99._key,
    navigate(spaceShip, direction) {
      spaceShip.navigator(direction, { accessKey: this._spaceShipKey });
    }
  };
  
  const astronautas = [capitandc, comandanteJuanita, capitanimpostor];

  document.getElementById("app").innerHTML = `
    <h2>Sistema de Navegación de la Nave Espacial</h2>

    <p>Astronautas: </p>
    <p><pre><code>${JSON.stringify(astronautas, null, 1)}</code></pre></p>

    <p>Nave Espacial: </p>
    <p><pre><code>${JSON.stringify({ rocket99 }, null, 1)}</code></pre></p>

    <p>
      <button id="btn1">Probar acceso del Capitan DC</button>
      <button id="btn2">Probar acceso de la Comandante Juanita</button>
      <button id="btn3">Probar acceso del Impostor</button>
    </p>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn1 = document.getElementById('btn1');
  const runBtn2 = document.getElementById('btn2');
  const runBtn3 = document.getElementById('btn3');
  const rtaElement = document.getElementById('rta');

  runBtn1.addEventListener('click', () => {
    try {
      const rta = simulador(capitandc, rocket99, "left");
      rtaElement.innerHTML = "Historial de movimientos de la nave: ";
      rtaElement.innerHTML += JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = "Error: ";
      rtaElement.innerHTML += JSON.stringify(error.message, null, 1);
    }
  });

  runBtn2.addEventListener('click', () => {
    try {
      const rta = simulador(comandanteJuanita, rocket99, "right");
      rtaElement.innerHTML = "Historial de movimientos de la nave: ";
      rtaElement.innerHTML += JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = "Error: ";
      rtaElement.innerHTML += JSON.stringify(error.message, null, 1);
    }
  });

  runBtn3.addEventListener('click', () => {
    try {
      const rta = simulador(capitanimpostor, rocket99, "colission");
      rtaElement.innerHTML = "Historial de movimientos de la nave: ";
      rtaElement.innerHTML += JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = "Error: ";
      rtaElement.innerHTML += JSON.stringify(error.message, null, 1);
    }
  });
})();
