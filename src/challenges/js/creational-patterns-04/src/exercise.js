export function runSimulation({ galaxyRocket, odisseyRocket }) {
  const galaxyRocketPrototype = galaxyRocket.clone();
  const odisseyRocketPrototype = odisseyRocket.clone();

  galaxyRocketPrototype.nozzle = 'double';
  galaxyRocketPrototype.engine = 'liquid';

  odisseyRocketPrototype.nozzle = 'single';
  odisseyRocketPrototype.engine = 'solid';

  return {
    odisseyRocketPrototype,
    galaxyRocketPrototype,
  };
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

export class GalaxyRocket extends Product {
  // Your code goes here...
}

export class OdiseeyRocket extends Product {
  // Your code goes here...
}
