export function runPrototypesModification({
  galaxyRocket,
  odisseyRocket,
}) {
  const galaxyRocketPrototype = galaxyRocket.clone();
  const odisseyRocketPrototype = odisseyRocket.clone();

  galaxyRocketPrototype.engine = 'liquid';
  galaxyRocketPrototype.nozzle = 'double';

  odisseyRocketPrototype.engine = 'solid';
  odisseyRocketPrototype.nozzle = 'single';

  return {
    odisseyRocketPrototype,
    galaxyRocketPrototype,
  };
}

class Product {
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

  // Your code goes here...
}

export class GalaxyRocket extends Product {
  // Your code goes here...
}

export class OdiseeyRocket extends Product {
  // Your code goes here...
}
