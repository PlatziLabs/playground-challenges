import {
  GalaxyPartsFactory,
  OdisseyPartsFactory,
  Rocket,
  runAssembleSimulation,
} from './exercise';

describe('Exercise 2. New parts, new models, new families!', () => {
  it('verify if galaxy parts factory return correct parts', () => {
    const galaxyPartsFactory = new GalaxyPartsFactory();
    const engine = galaxyPartsFactory.createEngine();
    const nozzle = galaxyPartsFactory.createNozzle();

    expect(engine).toBe('solid');
    expect(nozzle).toBe('single');
  });

  it('verify if odissey parts factory return correct parts', () => {
    const odisseyPartsFactory = new OdisseyPartsFactory();
    const engine = odisseyPartsFactory.createEngine();
    const nozzle = odisseyPartsFactory.createNozzle();

    expect(engine).toBe('liquid');
    expect(nozzle).toBe('double');
  });

  it('verify if Galaxy rocket has correct parts after assemble process', () => {
    const galaxyRocket = new Rocket({
      model: 'Galaxy001',
      category: 'valkyria',
    });

    const galaxyPartsFactory = new GalaxyPartsFactory();

    const { assembledRocket } = runAssembleSimulation({
      rocketToBeAssembled: galaxyRocket,
      rocketPartsFactory: galaxyPartsFactory,
    });

    expect(assembledRocket.engine).toBe('solid');
    expect(assembledRocket.nozzle).toBe('single');
  });

  it('verify if Odissey rocket has correct parts after assemble process', () => {
    const odissey = new Rocket({
      model: 'Odissey001',
      category: 'hermes',
    });

    const odisseyPartsFactory = new OdisseyPartsFactory();

    const { assembledRocket } = runAssembleSimulation({
      rocketToBeAssembled: odissey,
      rocketPartsFactory: odisseyPartsFactory,
    });

    expect(assembledRocket.engine).toBe('liquid');
    expect(assembledRocket.nozzle).toBe('double');
  });
});
