export function runSimulation({
  odisseyPartsFactory,
  galaxyPartsFactory,
}) {
  const assemblyLine = new AssemblyLine();

  // Odissey rocket
  const odisseyRocket = new Rocket({
    model: 'Odissey001',
    category: 'hermes',
  });

  const odisseyEngine = odisseyPartsFactory.createEngine();
  const odisseyNozzle = odisseyPartsFactory.createNozzle();

  assemblyLine.setEngine(odisseyEngine);
  assemblyLine.setNozzle(odisseyNozzle);
  const assembledOdissey = assemblyLine.assemble(odisseyRocket);

  // Galaxy rocket
  const galaxyRocket = new Rocket({
    model: 'Galaxy001',
    type: 'valkyria',
  });

  const galaxyEngine = galaxyPartsFactory.createEngine();
  const galaxyNozzle = galaxyPartsFactory.createNozzle();

  assemblyFactory.setEngine(galaxyEngine);
  assemblyFactory.setNozzle(galaxyNozzle);
  const assembledGalaxy = assemblyLine.assemble(galaxyRocket);

  return { odissey: assembledOdissey, galaxy: assembledGalaxy };
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
}

export class AssemblyLine {
  constructor() {
    this.engine = null;
    this.nozzle = null;
  }

  // Requires rocket as param
  assemble() {
    this.reset();
    // Verifications are missing
    // Setting of the properties is missing
    return rocket;
  }

  // Missing function
  setEngine(engine) {
    this.engine = engine;
  }

  // Missing function
  setNozzle(nozzle) {
    this.nozzle = nozzle;
  }

  reset() {
    this.engine = null;
    this.nozzle = null;
  }
}

// This will not be present
export class RocketPartsFactory {
  createEngine() {}
  createNuzzle() {}
}
