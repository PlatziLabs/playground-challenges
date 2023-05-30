/**
 * Note: we encourage check the tests file first before you go
 * with the solution to the challange.
 *
 * This will help you to determine which work must be done, this
 * could be an initial approach to TDD (Test Driven Development).
 */

export function runAssembleSimulation({
  rocketPartsFactory,
  rocketToBeAssembled,
}) {
  const assemblyLine = new AssemblyLine();

  const engine = rocketPartsFactory.createEngine();
  const nozzle = rocketPartsFactory.createNozzle();

  assemblyLine.setEngine(engine);
  assemblyLine.setNozzle(nozzle);
  const assembledRocket = assemblyLine.assemble(rocketToBeAssembled);

  return { assembledRocket };
}

export class Rocket {
  constructor({ model, category }) {
    this._model = model;
    this._engine = null;
    this._category = category;
    this._nozzle = null;
  }

  set engine(engine) {
    this._engine = engine;
  }

  set nozzle(nozzle) {
    this._nozzle = nozzle;
  }

  get engine() {
    return this._engine;
  }

  get nozzle() {
    return this._nozzle;
  }
}

class AssemblyLine {
  constructor() {
    this.engine = null;
    this.nozzle = null;
  }

  assemble() {
    // Your code goes here...

    this.reset();

    return rocket;
  }

  setEngine(engine) {
    // Your code goes here...
  }

  // Missing function
  setNozzle(nozzle) {
    // Your code goes here...
  }

  reset() {
    this.engine = null;
    this.nozzle = null;
  }
}
