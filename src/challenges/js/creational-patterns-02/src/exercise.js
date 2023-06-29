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
  createEngine() {
    console.log('Not implemented yet!');
  }

  createNozzle() {
    console.log('Not implemented yet!');
  }
}

export class GalaxyPartsFactory extends RocketPartsFactory {
  createEngine() {
    return 'solid';
  }

  createNozzle() {
    return 'single';
  }
}

export class OdisseyPartsFactory extends RocketPartsFactory {
  createEngine() {
    return 'liquid';
  }

  createNozzle() {
    return 'double';
  }
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

  assemble(rocket) {
    if (!this.engine || !this.nozzle) {
      return null;
    }

    rocket.engine = this.engine;
    rocket.nozzle = this.nozzle;

    this.reset();

    return rocket;
  }

  setEngine(engine) {
    this.engine = engine;
  }

  setNozzle(nozzle) {
    this.nozzle = nozzle;
  }

  reset() {
    this.engine = null;
    this.nozzle = null;
  }
}
