export function runGalaxyProductsAssembleSimulation({
  rocketAssemblyLine,
  manualAssemblyLine,
}) {
  const rocketDirector = new Director({
    assemblyLine: rocketAssemblyLine,
  });

  rocketDirector.buildGalaxyProduct();
  const rocket = rocketAssemblyLine.assemble();

  const manualDirector = new Director({
    assemblyLine: manualAssemblyLine,
  });

  manualDirector.buildGalaxyProduct();
  const manual = manualAssemblyLine.assemble();

  return {
    manual,
    rocket,
  };
}

export function runOdisseyProductsAssembleSimulation({
  rocketAssemblyLine,
  manualAssemblyLine,
}) {
  const rocketDirector = new Director({
    assemblyLine: rocketAssemblyLine,
  });

  rocketDirector.buildOdisseyProduct();
  const rocket = rocketAssemblyLine.assemble();

  const manualDirector = new Director({
    assemblyLine: manualAssemblyLine,
  });

  manualDirector.buildOdisseyProduct();
  const manual = manualAssemblyLine.assemble();

  return {
    manual,
    rocket,
  };
}

class AssemblyLine {
  setModel(model) {
    this.model = model;
  }

  setEngine(engine) {
    this.engine = engine;
  }

  setCategory(category) {
    this.category = category;
  }

  setNozzle(nozzle) {
    this.nozzle = nozzle;
  }

  validateParts() {
    const allPartsAreValid =
      this.model && this.engine && this.category && this.nozzle;

    return allPartsAreValid;
  }

  aasemble() {
    console.log('Not implemented yet!');
  }
}

export class RocketAssemblyLine extends AssemblyLine {
  constructor() {
    super();
  }

  assemble() {
    if (!this.validateParts()) {
      return null;
    }

    return new Rocket({
      model: this.model,
      engine: this.engine,
      category: this.category,
      nozzle: this.nozzle,
    });
  }
}

export class ManualAssemblyLine extends AssemblyLine {
  constructor() {
    super();
  }

  assemble() {
    if (!this.validateParts()) {
      return null;
    }

    return new Manual({
      model: this.model,
      engine: this.engine,
      category: this.category,
      nozzle: this.nozzle,
    });
  }
}

class Director {
  constructor({ assemblyLine }) {
    this.assemblyLine = assemblyLine;
  }

  buildGalaxyProduct() {
    this.assemblyLine.setModel('Galaxy');
    this.assemblyLine.setEngine('solid');
    this.assemblyLine.setCategory('valkyria');
    this.assemblyLine.setNozzle('single');
  }

  buildOdisseyProduct() {
    this.assemblyLine.setModel('Odissey');
    this.assemblyLine.setEngine('liquid');
    this.assemblyLine.setCategory('hermes');
    this.assemblyLine.setNozzle('double');
  }
}

class Product {
  constructor({ model, engine, category, nozzle }) {
    this._model = model;
    this._engine = engine;
    this._category = category;
    this._nozzle = nozzle;
  }

  get model() {
    return this._model;
  }

  get engine() {
    return this._engine;
  }

  get category() {
    return this._category;
  }

  get nozzle() {
    return this._nozzle;
  }
}

export class Rocket extends Product {
  constructor(params) {
    super(params);
  }
}

export class Manual extends Product {
  constructor(params) {
    super(params);
  }

  get description() {
    return `Rocket Model: ${this._model}, Engine : ${this._engine}, Category: ${this._category}, Nozzle: ${this._nozzle}`;
  }
}
