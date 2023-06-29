import "./styles.css";
import {
  GalaxyRocket,
  OdisseyRocket,
  runPrototypesModification,
} from './exercise';

(() => {

  document.getElementById("app").innerHTML = `
    <h2>Testing Rocket Prototypes</h2>
    
    <section>
      <h3>Galaxy Rocket Clone</h3>

      <p>Original:</p>
      <p><pre id="grOriginal"></pre></p>
      <p>Clone:</p>
      <p><pre id="grClone"></pre></p>
      
      <p><pre id="grErr"></pre></p>
      <button id="grBtn">Test</button>
    </section>
      
    <section>
      <h3>Odissey Rocket Clone</h3>
      
      <p>Original:</p>
      <p><pre id="orOriginal"></pre></p>
      <p>Clone:</p>
      <p><pre id="orClone"></pre></p>
      
      <p><pre id="orErr"></pre></p>
      <button id="orBtn">Test</button>
    </section>
      
    <section>
      <h3>Prototypes Modifications</h3>
      
      <p>Galaxy Rocket Prototype:</p>
      <p><pre id="grProto"></pre></p>
      <p>Odissey Rocket Prototype:</p>
      <p><pre id="orProto"></pre></p>
      
      <p><pre id="protoErr"></pre></p>
      <button id="protoBtn">Test</button>
    </section>
  `;

  const grOriginal = document.getElementById('grOriginal');
  const grClone = document.getElementById('grClone');
  const grErr = document.getElementById('grErr');
  const grBtn = document.getElementById('grBtn');
  
  const orOriginal = document.getElementById('orOriginal');
  const orClone = document.getElementById('orClone');
  const orErr = document.getElementById('orErr');
  const orBtn = document.getElementById('orBtn');
  
  const grProto = document.getElementById('grProto');
  const orProto = document.getElementById('orProto');
  const protoErr = document.getElementById('protoErr');
  const protoBtn = document.getElementById('protoBtn');
  
  grBtn.addEventListener('click', () => {
    try {
      const galaxyRocket = new GalaxyRocket();
      const galaxyRocketPrototype = galaxyRocket.clone();

      grOriginal.innerHTML = JSON.stringify({
        model: galaxyRocket.model,
        engine: galaxyRocket.engine,
        category: galaxyRocket.category,
        nozzle: galaxyRocket.nozzle,
      }, null, 1);

      grClone.innerHTML = JSON.stringify({
        model: galaxyRocketPrototype.model,
        engine: galaxyRocketPrototype.engine,
        category: galaxyRocketPrototype.category,
        nozzle: galaxyRocketPrototype.nozzle,
      }, null, 1);
    } catch (error) {
      grErr.innerHTML = error;
    }
  });
  
  orBtn.addEventListener('click', () => {
    try {
      const odisseyRocket = new OdisseyRocket();
      const odisseyRocketPrototype = odisseyRocket.clone();

      orOriginal.innerHTML = JSON.stringify({
        model: odisseyRocket.model,
        engine: odisseyRocket.engine,
        category: odisseyRocket.category,
        nozzle: odisseyRocket.nozzle,
      }, null, 1);

      orClone.innerHTML = JSON.stringify({
        model: odisseyRocketPrototype.model,
        engine: odisseyRocketPrototype.engine,
        category: odisseyRocketPrototype.category,
        nozzle: odisseyRocketPrototype.nozzle,
      }, null, 1);
    } catch (error) {
      orErr.innerHTML = error;
    }
  });
  
  protoBtn.addEventListener('click', () => {
    try {
      const galaxyRocket = new GalaxyRocket();
      const odisseyRocket = new OdisseyRocket();

      const {
        galaxyRocketPrototype,
        odisseyRocketPrototype,
      } = runPrototypesModification({ galaxyRocket, odisseyRocket });

      grProto.innerHTML = JSON.stringify({
        model: `${galaxyRocketPrototype.model} (should be 'Galaxy')`,
        engine: `${galaxyRocketPrototype.engine} (should be 'liquid')`,
        category: `${galaxyRocketPrototype.category} (should be 'valkyria')`,
        nozzle: `${galaxyRocketPrototype.nozzle} (should be 'double')`,
      }, null, 1);

      orProto.innerHTML = JSON.stringify({
        model: `${odisseyRocketPrototype.model} (should be 'Odissey')`,
        engine: `${odisseyRocketPrototype.engine} (should be 'solid')`,
        category: `${odisseyRocketPrototype.category} (should be 'hermes')`,
        nozzle: `${odisseyRocketPrototype.nozzle} (should be 'single')`,
      }, null, 1);
    } catch (error) {
      protoErr.innerHTML = error;
    }
  });
})();
