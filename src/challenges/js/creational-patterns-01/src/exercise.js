export class Rocket {
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

export class LiquidFuelRocket extends Rocket {
  constructor(params) {
    super(params);
  }
}

export class SolidFuelRocket extends Rocket {
  constructor(params) {
    super(params);
  }
}

export class RocketFactory {
  createRocket() {
    return new Error('Not available at this moment!');
  }
}

export class LiquidFuelRocketsFactory extends RocketFactory {
  createRocket() {
    return new LiquidFuelRocket({
      model: 'LF001',
      engine: 'liquid',
      category: 'hermes',
      nozzle: 'double',
    });
  }
}

export class SolidFuelRocketsFactory extends RocketFactory {
  createRocket() {
    return new SolidFuelRocket({
      model: 'SF001',
      engine: 'solid',
      category: 'valkyria',
      nozzle: 'single',
    });
  }
}
