import "./styles.css";
import {
  RocketAssemblyLine,
  ManualAssemblyLine,
  runGalaxyProductsAssembleSimulation,
  runOdisseyProductsAssembleSimulation,
} from './exercise';

(() => {
  const gMODEL = 'Galaxy';
  const gENGINE = 'solid';
  const gCATEGORY = 'valkyria';
  const gNOZZLE = 'single';
  const gDESC = `Rocket Model: ${gMODEL}, Engine : ${gENGINE}, Category: ${gCATEGORY}, Nozzle: ${gNOZZLE}`;

  const oMODEL = 'Odissey';
  const oENGINE = 'liquid';
  const oCATEGORY = 'hermes';
  const oNOZZLE = 'double';
  const oDESC = `Rocket Model: ${oMODEL}, Engine : ${oENGINE}, Category: ${oCATEGORY}, Nozzle: ${oNOZZLE}`;

  document.getElementById("app").innerHTML = `
    <h2>Assembling rockets one step at time</h2>
    
    <section>
      <h3>Galaxy Products</h3>

      <p>Model <small>(should be '${gMODEL}')</small>:</p>
      <p><pre id="galaxyModel"></pre></p>
      <p>Engine <small>(should be '${gENGINE}')</small>:</p>
      <p><pre id="galaxyEngine"></pre></p>
      <p>Category <small>(should be '${gCATEGORY}')</small>:</p>
      <p><pre id="galaxyCategory"></pre></p>
      <p>Nozzle <small>(should be '${gNOZZLE}')</small>:</p>
      <p><pre id="galaxyNozzle"></pre></p>
      <p>Description <small>(should be '${gDESC}')</small>:</p>
      <p><pre id="galaxyDesc"></pre></p>
      
      <p><pre id="galaxyErr"></pre></p>

      <button id="galaxyBtn">Assemble Simulation</button>
    </section>
    
    <section>
      <h3>Odissey Products</h3>

      <p>Model <small>(should be '${oMODEL}')</small>:</p>
      <p><pre id="odisseyModel"></pre></p>
      <p>Engine <small>(should be '${oENGINE}')</small>:</p>
      <p><pre id="odisseyEngine"></pre></p>
      <p>Category <small>(should be '${oCATEGORY}')</small>:</p>
      <p><pre id="odisseyCategory"></pre></p>
      <p>Nozzle <small>(should be '${oNOZZLE}')</small>:</p>
      <p><pre id="odisseyNozzle"></pre></p>
      <p>Description <small>(should be '${oDESC}')</small>:</p>
      <p><pre id="odisseyDesc"></pre></p>
      
      <p><pre id="odisseyErr"></pre></p>

      <button id="odisseyBtn">Assemble Simulation</button>
    </section>
  `;

  const galaxyEngine = document.getElementById('galaxyEngine');
  const galaxyCategory = document.getElementById('galaxyCategory');
  const galaxyModel = document.getElementById('galaxyModel');
  const galaxyNozzle = document.getElementById('galaxyNozzle');
  const galaxyDesc = document.getElementById('galaxyDesc');
  const galaxyErr = document.getElementById('galaxyErr');
  const galaxyBtn = document.getElementById('galaxyBtn');

  const odisseyModel = document.getElementById('odisseyModel');
  const odisseyEngine = document.getElementById('odisseyEngine');
  const odisseyCategory = document.getElementById('odisseyCategory');
  const odisseyNozzle = document.getElementById('odisseyNozzle');
  const odisseyDesc = document.getElementById('odisseyDesc');
  const odisseyErr = document.getElementById('odisseyErr');
  const odisseyBtn = document.getElementById('odisseyBtn');
  
  galaxyBtn.addEventListener('click', () => {
    try {
      const rocketAssemblyLine = new RocketAssemblyLine();
      const manualAssemblyLine = new ManualAssemblyLine();

      const { manual, rocket } = runGalaxyProductsAssembleSimulation({
        rocketAssemblyLine: rocketAssemblyLine,
        manualAssemblyLine: manualAssemblyLine,
      });

      galaxyModel.innerHTML = rocket.model;
      galaxyEngine.innerHTML = rocket.engine;
      galaxyCategory.innerHTML = rocket.category;
      galaxyNozzle.innerHTML = rocket.nozzle;
      galaxyDesc.innerHTML = manual.description;
      galaxyErr.innerHTML = '';
    } catch (error) {
      galaxyModel.innerHTML = '';
      galaxyEngine.innerHTML = '';
      galaxyCategory.innerHTML = '';
      galaxyNozzle.innerHTML = '';
      galaxyDesc.innerHTML = '';
      galaxyErr.innerHTML = error;
    }
  });
  
  odisseyBtn.addEventListener('click', () => {
    try {
      const rocketAssemblyLine = new RocketAssemblyLine();
      const manualAssemblyLine = new ManualAssemblyLine();

      const { manual, rocket } = runOdisseyProductsAssembleSimulation({
        rocketAssemblyLine: rocketAssemblyLine,
        manualAssemblyLine: manualAssemblyLine,
      });

      odisseyModel.innerHTML = rocket.model;
      odisseyEngine.innerHTML = rocket.engine;
      odisseyCategory.innerHTML = rocket.category;
      odisseyNozzle.innerHTML = rocket.nozzle;
      odisseyDesc.innerHTML = manual.description;
      odisseyErr.innerHTML = '';
    } catch (error) {
      odisseyModel.innerHTML = '';
      odisseyEngine.innerHTML = '';
      odisseyCategory.innerHTML = '';
      odisseyNozzle.innerHTML = '';
      odisseyDesc.innerHTML = '';
      odisseyErr.innerHTML = error;
    }
  });
})();
