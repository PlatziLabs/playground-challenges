import "./styles.css";
import {
  Rocket,
  RocketFactory,
  LiquidFuelRocket,
  LiquidFuelRocketsFactory,
  SolidFuelRocket,
  SolidFuelRocketsFactory,
} from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h3>Lets create some rockets!</h3>
    <button id="btnLiquid">Create Liquid Fuel Rockets Factory</button>
    <p><pre><code id="rtaLiquid"></code></pre></p>
    <button id="btnSolid">Create Solid Fuel Rockets Factory</button>
    <p><pre><code id="rtaSolid"></code></pre></p>
  `;

  const btnLiquid = document.querySelector("#btnLiquid");
  const rtaLiquid = document.querySelector("#rtaLiquid");
  const btnSolid = document.querySelector("#btnSolid");
  const rtaSolid = document.querySelector("#rtaSolid");

  btnLiquid.addEventListener("click", () => {
    try {
      const liquidFuelRocketsFactory = new LiquidFuelRocketsFactory();
      const liquidRocket = liquidFuelRocketsFactory.createRocket?.();
      rtaLiquid.innerHTML = JSON.stringify({
        model: liquidRocket?.model || 'ERROR: model not found',
        engine: liquidRocket?.engine || 'ERROR: engine not found',
        category: liquidRocket?.category || 'ERROR: category not found',
        nozzle: liquidRocket?.nozzle || 'ERROR: nozzle not found',
        isRocket: liquidRocket instanceof Rocket || 'ERROR: liquidRocket is not instance of Rocket',
        isLiquidFuelRocket: liquidRocket instanceof LiquidFuelRocket || 'ERROR: liquidRocket is not instance of LiquidFuelRocket',
        isRocketFactory: liquidFuelRocketsFactory instanceof RocketFactory || 'ERROR: liquidFuelRocketsFactory is not instance of RocketFactory',
      }, null, 1);
    } catch (error) {
      rtaLiquid.innerHTML = error;
      console.error(error);
    }
  });

  btnSolid.addEventListener("click", (event) => {
    try {
      const solidFuelRocketsFactory = new SolidFuelRocketsFactory();
      const solidRocket = solidFuelRocketsFactory.createRocket?.();
      rtaSolid.innerHTML = JSON.stringify({
        model: solidRocket?.model || 'ERROR: model not found',
        engine: solidRocket?.engine || 'ERROR: engine not found',
        category: solidRocket?.category || 'ERROR: category not found',
        nozzle: solidRocket?.nozzle || 'ERROR: nozzle not found',
        isRocket: solidRocket instanceof Rocket || 'ERROR: solidRocket is not instance of Rocket',
        isSolidFuelRocket: solidRocket instanceof SolidFuelRocket || 'ERROR: solidRocket is not instance of SolidFuelRocket',
        isRocketFactory: solidFuelRocketsFactory instanceof RocketFactory || 'ERROR: SolidFuelRocketsFactory is not instance of RocketFactory',
      }, null, 1);
    } catch (error) {
      rtaSolid.innerHTML = error;
      console.error(error);
    }
  });
})();
