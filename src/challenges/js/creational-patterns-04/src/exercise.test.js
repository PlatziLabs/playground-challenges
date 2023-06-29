import {
  GalaxyRocket,
  OdisseyRocket,
  runPrototypesModification,
} from './exercise';

describe('Exercise 4. Testing Rocket Prototypes', () => {
  it('galaxy rocket prototype has the same properties values as the original', () => {
    const galaxyRocket = new GalaxyRocket();
    const galaxyRocketPrototype = galaxyRocket.clone();

    expect(galaxyRocket.model).toBe(galaxyRocketPrototype.model);
    expect(galaxyRocket.engine).toBe(galaxyRocketPrototype.engine);
    expect(galaxyRocket.category).toBe(galaxyRocketPrototype.category);
    expect(galaxyRocket.nozzle).toBe(galaxyRocketPrototype.nozzle);
  });

  it('odissey rocket prototype has the same properties values as the original', () => {
    const odisseyRocket = new OdisseyRocket();
    const odisseyRocketPrototype = odisseyRocket.clone();

    expect(odisseyRocket.model).toBe(odisseyRocketPrototype.model);
    expect(odisseyRocket.engine).toBe(odisseyRocketPrototype.engine);
    expect(odisseyRocket.category).toBe(odisseyRocketPrototype.category);
    expect(odisseyRocket.nozzle).toBe(odisseyRocketPrototype.nozzle);
  });

  it('modifications to galaxy and odissey prototypes were a success', () => {
    const galaxyRocket = new GalaxyRocket();
    const odisseyRocket = new OdisseyRocket();

    const {
      galaxyRocketPrototype,
      odisseyRocketPrototype,
    } = runPrototypesModification({ galaxyRocket, odisseyRocket });

    expect(galaxyRocketPrototype.model).toBe('Galaxy');
    expect(galaxyRocketPrototype.engine).toBe('liquid');
    expect(galaxyRocketPrototype.category).toBe('valkyria');
    expect(galaxyRocketPrototype.nozzle).toBe('double');

    expect(odisseyRocketPrototype.model).toBe('Odissey');
    expect(odisseyRocketPrototype.engine).toBe('solid');
    expect(odisseyRocketPrototype.category).toBe('hermes');
    expect(odisseyRocketPrototype.nozzle).toBe('single');
  });
});
