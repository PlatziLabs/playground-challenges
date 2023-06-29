/**
 * Note: we encourage check the tests file first before you go
 * with the solution to the challange.
 *
 * This will help you to determine which work must be done, this
 * could be an initial approach to TDD (Test Driven Development).
 */

class Rocket {
  constructor({ model, engine, category, nozzle }) {
    // Your code goes here...
    this._model = model;
    this._engine = engine;
    this._category = category;
    this._nozzle = nozzle;
  }

  get model() {
    // Your code goes here...
    return this._model;
  }

  get engine() {
    // Your code goes here...
    return this._engine;
  }

  get category() {
    // Your code goes here...
    return this._category;
  }

  get nozzle() {
    // Your code goes here...
    return this._nozzle;
  }
}

class LiquidFuelRocket extends Rocket {
  constructor(params) {
    super(params);
  }
}

class SolidFuelRocket extends Rocket {
  constructor(params) {
    super(params);
  }
}

class RocketFactory {
  // Your code goes here...
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
