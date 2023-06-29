import "./styles.css";
import { runSingleInstanceSimulation } from './exercise';

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Tracking rockets creation</h2>
    
    <p>Rockets Creation History:</p>
    <p><pre id="original"></pre></p>
    
    <p>New Rockets Creation History:</p>
    <p><pre id="new"></pre></p>
    
    <p>Are original and new logs pointing the same reference?</p>
    <p><pre id="equality"></pre></p>
    
    <p><pre id="err"></pre></p>
    <button id="btn">Run Simulation</button>
  `;

  const originalP = document.getElementById('original');
  const newP = document.getElementById('new');
  const equalityP = document.getElementById('equality');
  const errP = document.getElementById('equality');
  const runBtn = document.getElementById('btn');

  runBtn.addEventListener('click', () => {
    try {
      const {
        rocketsCreationHistory,
        newRocketsCreationHistory,
      } = runSingleInstanceSimulation();
  
      originalP.innerHTML = rocketsCreationHistory.history;
      newP.innerHTML = newRocketsCreationHistory.history;
      equalityP.innerHTML = (rocketsCreationHistory.history === newRocketsCreationHistory.history);
    } catch (error) {
      originalP.innerHTML = '';
      newP.innerHTML = '';
      equalityP.innerHTML = '';
      errP.innerHTML = error;
    }
  });
})();
