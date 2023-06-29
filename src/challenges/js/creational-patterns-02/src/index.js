import "./styles.css";
import {
  GalaxyPartsFactory,
  OdisseyPartsFactory,
  Rocket,
  runAssembleSimulation,
} from './exercise';

(() => {
  // ...

  document.getElementById("app").innerHTML = `
    <h2>New parts, new models, new families!</h2>

    <section>
      <h3>Galaxy Parts Factory</h3>

      <p>Engine <small>(should be 'solid')</small>:</p>
      <p><pre id="gpfEngineP"></pre></p>
      <p>Nozzle <small>(should be 'single')</small>:</p>
      <p><pre id="gpfNozzleP"></pre></p>
      
      <button id="gpfEngineBtn">Create Engine</button>
      <button id="gpfNozzleBtn">Create Nozzle</button>
      <button id="gpfAssembleBtn">Assemble</button>
      </section>
      
      <section>
      <h3>Odissey Parts Factory</h3>
      
      <p>Engine <small>(should be 'liquid')</small>:</p>
      <p><pre id="opfEngineP"></pre></p>
      <p>Nozzle <small>(should be 'double')</small>:</p>
      <p><pre id="opfNozzleP"></pre></p>
      
      <button id="opfEngineBtn">Create Engine</button>
      <button id="opfNozzleBtn">Create Nozzle</button>
      <button id="opfAssembleBtn">Assemble</button>
    </section>
  `;

  const gpfEngineP = document.getElementById('gpfEngineP');
  const gpfNozzleP = document.getElementById('gpfNozzleP');
  const gpfEngineBtn = document.getElementById('gpfEngineBtn');
  const gpfNozzleBtn = document.getElementById('gpfNozzleBtn');
  const gpfAssembleBtn = document.getElementById('gpfAssembleBtn');
  const opfEngineBtn = document.getElementById('opfEngineBtn');
  const opfEngineP = document.getElementById('opfEngineP');
  const opfNozzleBtn = document.getElementById('opfNozzleBtn');
  const opfNozzleP = document.getElementById('opfNozzleP');
  const opfAssembleBtn = document.getElementById('opfAssembleBtn');

  gpfEngineBtn.addEventListener('click', () => {
    try {
      const galaxyPartsFactory = new GalaxyPartsFactory();
      const engine = galaxyPartsFactory.createEngine();
      gpfEngineP.innerHTML = engine;
    } catch (error) {
      gpfEngineP.innerHTML = error;
    }
  });

  gpfNozzleBtn.addEventListener('click', () => {
    try {
      const galaxyPartsFactory = new GalaxyPartsFactory();
      const nozzle = galaxyPartsFactory.createNozzle();
      gpfNozzleP.innerHTML = nozzle;
    } catch (error) {
      gpfNozzleP.innerHTML = error;
    }
  });

  gpfAssembleBtn.addEventListener('click', () => {
    try {
      const galaxyRocket = new Rocket({
        model: 'Galaxy001',
        category: 'valkyria',
      });
  
      const galaxyPartsFactory = new GalaxyPartsFactory();
  
      const { assembledRocket } = runAssembleSimulation({
        rocketToBeAssembled: galaxyRocket,
        rocketPartsFactory: galaxyPartsFactory,
      });

      gpfEngineP.innerHTML = assembledRocket.engine;
      gpfNozzleP.innerHTML = assembledRocket.nozzle;
    } catch (error) {
      gpfEngineP.innerHTML = error;
      gpfNozzleP.innerHTML = error;
    }
  });

  opfEngineBtn.addEventListener('click', () => {
    try {
      const odisseyPartsFactory = new OdisseyPartsFactory();
      const engine = odisseyPartsFactory.createEngine();
      opfEngineP.innerHTML = engine;
    } catch (error) {
      opfEngineP.innerHTML = error;
    }
  });

  opfNozzleBtn.addEventListener('click', () => {
    try {
      const odisseyPartsFactory = new OdisseyPartsFactory();
      const nozzle = odisseyPartsFactory.createNozzle();
      opfNozzleP.innerHTML = nozzle;
    } catch (error) {
      opfNozzleP.innerHTML = error;
    }
  });

  opfAssembleBtn.addEventListener('click', () => {
    try {
      const odisseyRocket = new Rocket({
        model: 'Galaxy001',
        category: 'valkyria',
      });
  
      const odisseyPartsFactory = new OdisseyPartsFactory();
  
      const { assembledRocket } = runAssembleSimulation({
        rocketToBeAssembled: odisseyRocket,
        rocketPartsFactory: odisseyPartsFactory,
      });

      opfEngineP.innerHTML = assembledRocket.engine;
      opfNozzleP.innerHTML = assembledRocket.nozzle;
    } catch (error) {
      opfEngineP.innerHTML = error;
      opfNozzleP.innerHTML = error;
    }
  });
})();
