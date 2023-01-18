import "./styles.css";
import { Astronaut, SpaceStation, Satelite, simulacion } from "./exercise";

(() => {
  const capitanDC = new Astronaut({ name: 'Capitán DC' });
  const comandanteJuanita = new Astronaut({ name: 'Comandante Juanita' });
  const capitanImpostor = { name: 'Capitan Impostor' };
  const astronautas = [capitanDC, comandanteJuanita, capitanImpostor];
  
  const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial Platzi' });
  const estacionFalsa = { name: 'Estacion Espacial Falsa', team: ["Capitan Impostor"] };
  const estaciones = [estacionPlatzi, estacionFalsa];
  
  const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });

  estacionPlatzi.addTeamMember(capitanDC);

  document.getElementById("app").innerHTML = `
    <h2>Sistema de Comunicación del Satélite Espacial</h2>

    <p>Astronautas: </p>
    <p>
    <pre><code>${JSON.stringify(astronautas, null, 1)}</code></pre>
    </p>

    <p>Estaciones Espaciales: </p>
    <p>
    <pre><code>${JSON.stringify(estaciones, null, 1)}</code></pre>
    </p>

    <p>Satélite: </p>
    <p>
    <pre><code>${JSON.stringify({ satelitePlatziSat01 }, null, 1)}</code></pre>
    </p>

    <p>Mensaje 1, astronauta tripulante de la estación (sí debería enviarse)</p>
    <p><button id="btn1">Enviar mensaje 1</button><p/>
    <p><pre><code id="rta1"></code></pre></p>
    
    <p>Mensaje 2, astronauta que no es tripulante de la estación (no debería enviarse)</p>
    <p><button id="btn2">Enviar mensaje 2</button><p/>
    <p><pre><code id="rta2"></code></pre></p>
    
    <p>Mensaje 3, impostor que no es astronauta ni tripulante de la estación (no debería enviarse)</p>
    <p><button id="btn3">Enviar mensaje 3</button><p/>
    <p><pre><code id="rta3"></code></pre></p>
    
    <p>Mensaje 4, la estación es falsa (no debería enviarse)</p>
    <p><button id="btn4">Enviar mensaje 4</button><p/>
    <p><pre><code id="rta4"></code></pre></p>
  `;

  const runBtn1 = document.getElementById('btn1');
  const runBtn2 = document.getElementById('btn2');
  const runBtn3 = document.getElementById('btn3');
  const runBtn4 = document.getElementById('btn4');
  const rtaElement1 = document.getElementById('rta1');
  const rtaElement2 = document.getElementById('rta2');
  const rtaElement3 = document.getElementById('rta3');
  const rtaElement4 = document.getElementById('rta4');

  runBtn1.addEventListener('click', () => {
    try {
      const rta1 = simulacion({
        satelite: satelitePlatziSat01,
        estacion: estacionPlatzi,
        astronauta: capitanDC,
        texto: "SOS",
      });
      rtaElement1.innerHTML = "Lista de mensajes del satélite: ";
      rtaElement1.innerHTML += JSON.stringify(rta1, null, 1);
    } catch (error) {
      rtaElement1.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  runBtn2.addEventListener('click', () => {
    try {
      const rta2 = simulacion({
        satelite: satelitePlatziSat01,
        estacion: estacionPlatzi,
        astronauta: comandanteJuanita,
        texto: "Todo en orden",
      });
      rtaElement2.innerHTML = "Lista de mensajes del satélite: ";
      rtaElement2.innerHTML += JSON.stringify(rta2, null, 1);
    } catch (error) {
      rtaElement2.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  runBtn3.addEventListener('click', () => {
    try {
      const rta3 = simulacion({
        satelite: satelitePlatziSat01,
        estacion: estacionPlatzi,
        astronauta: capitanImpostor,
        texto: "MUAJAJAJA",
      });
      rtaElement3.innerHTML = "Lista de mensajes del satélite: ";
      rtaElement3.innerHTML += JSON.stringify(rta3, null, 1);
    } catch (error) {
      rtaElement3.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  runBtn4.addEventListener('click', () => {
    try {
      const rta4 = simulacion({
        satelite: satelitePlatziSat01,
        estacion: estacionFalsa,
        astronauta: capitanImpostor,
        texto: "MUAJAJAJA2",
      });
      rtaElement4.innerHTML = "Lista de mensajes del satélite: ";
      rtaElement4.innerHTML += JSON.stringify(rta4, null, 1);
    } catch (error) {
      rtaElement4.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
