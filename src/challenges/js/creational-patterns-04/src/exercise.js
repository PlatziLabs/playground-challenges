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

export class GalaxyRocket extends Product {
  constructor({
    model = 'Galaxy',
    engine = 'solid',
    category = 'valkyria',
    nozzle = 'single',
  } = {}) {
    super({ model, engine, category, nozzle });
  }

  clone() {
    return new GalaxyRocket({
      model: this._model,
      engine: this._engine,
      category: this._category,
      nozzle: this._nozzle,
    });
  }
}

export class OdisseyRocket extends Product {
  constructor({
    model = 'Odissey',
    engine = 'liquid',
    category = 'hermes',
    nozzle = 'double',
  } = {}) {
    super({ model, engine, category, nozzle });
  }

  clone() {
    return new OdisseyRocket({
      model: this._model,
      engine: this._engine,
      category: this._category,
      nozzle: this._nozzle,
    });
  }
}
