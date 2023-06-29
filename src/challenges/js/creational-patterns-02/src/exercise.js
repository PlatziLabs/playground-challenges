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

export class RocketPartsFactory {
  // Your code goes here...
}

export class GalaxyPartsFactory {
  // Your code goes here...
}

export class OdisseyPartsFactory {
  // Your code goes here...
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

export class AssemblyLine {
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

  // Missing function...
  
  setNozzle(nozzle) {
    // Your code goes here...
  }

  reset() {
    this.engine = null;
    this.nozzle = null;
  }
}
