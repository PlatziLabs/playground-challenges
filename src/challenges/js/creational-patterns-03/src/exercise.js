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
  // Your code goes here...

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
    // Your code goes here...
  }
}

export class ManualAssemblyLine extends AssemblyLine {
  constructor() {
    super();
  }

  assemble() {
    // Your code goes here...
  }
}

class Director {
  constructor({ assemblyLine }) {
    this.assemblyLine = assemblyLine;
  }

  buildGalaxyProduct() {
    // Your code goes here...
  }

  buildOdisseyProduct() {
    // Your code goes here...
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
  constructor() {
    super();
  }
}

export class Manual extends Product {
  constructor() {
    super();
  }

  get description() {
    return `Rocket Model: ${this._model}, Engine : ${this._engine}, Category: ${this._category}, Nozzle: ${this._nozzle}`;
  }
}
