export function runSimulation({
  rocketAssemblyLine,
  manualAssemblyLine,
}) {
  const rocketDirector = new Director({
    assemblyLine: rocketAssemblyLine,
  });

  rocketDirector.buildGalaxyProduct();
  const galaxyRocket = rocketAssemblyLine.assemble();

  // Pass a new product to the assembling line
  rocketDirector.assemblingLine.reset(new Rocket());
  rocketDirector.buildOdisseyProduct();

  const odisseyRocket = rocketAssemblyLine.assemble();

  const manualDirector = new Director({
    assemblyLine: manualAssemblyLine,
  });

  manualDirector.buildGalaxyProduct();
  const galaxyManual = manualAssemblyLine.assemble();

  // Pass a new product to the assembling line
  manualDirector.assemblingLine.reset(new Manual());
  manualDirector.buildOdisseyProduct();

  const odisseyManual = manualAssemblyLine.assemble();

  return {
    odissey: {
      rocket: odisseyRocket,
      manual: odisseyManual,
    },
    galaxy: {
      rocket: galaxyRocket,
      manual: galaxyManual,
    },
  };
}

class AssemblyLine {
  constructor({ product }) {
    this.product = product;
  }

  reset(newProduct) {
    this.product = newProduct;
  }

  aasemble() {
    console.log('Not implemented yet!');
    return null;
  }
}

class RocketAssemblyLine extends AssemblyLine {
  constructor({ product }) {
    super({ product });
  }
}

class ManuelAssemblyLine extends AssemblyLine {
  constructor({ product }) {
    super({ product });
  }
}

class Director {
  constructor(assemblingLine) {
    this._assemblingLine = assemblingLine;
  }

  get assemblingLine() {
    return this._assemblingLine;
  }

  buildGalaxyProduct() {
    // Immplementation missing
  }

  buildOdisseyProduct() {
    // Implementation missing
  }
}

export class Product {
  constructor({ model = '', engine = '', category = '', nozzle = '' }) {
    this._model = model;
    this._engine = engine;
    this._category = category;
    this._nozzle = nozzle;
  }

  set model(model) {
    this._model = model;
  }

  set engine(engine) {
    this._engine = engine;
  }

  set category(category) {
    this._category = category;
  }

  set nozzle(nozzle) {
    this._nozzle = nozzle;
  }
}

export class Rocket extends Product {
  constructor({ model, engine, category, nozzle }) {
    super();
  }
}

export class Manual extends Product {
  constructor({ model, engine, category, nozzle }) {
    super();
    this.description = `Rocket Model: ${model}, Category: ${category}, Engine : ${engine}, Nozzle: ${nozzle}`;
  }
}
