import {
  LiquidFuelRocketsFactory,
  SolidFuelRocketsFactory,
} from './exercise';

describe("[TESTS] Exercise 1. Let's create some rockets!", () => {
  it('liquid fuel rocket factory must return correct rocket', () => {
    const liquidFuelRocketsFactory = new LiquidFuelRocketsFactory();
    const liquidRocket = liquidFuelRocketsFactory.createRocket();

    expect(liquidRocket.model).toBe('LF001');
    expect(liquidRocket.engine).toBe('liquid');
    expect(liquidRocket.category).toBe('hermes');
    expect(liquidRocket.nozzle).toBe('double');
  });

  it('solid fuel rocket factory must return correct rocket', () => {
    const solidFuelRocketsFactory = new SolidFuelRocketsFactory();
    const solidRocket = solidFuelRocketsFactory.createRocket();

    expect(solidRocket.model).toBe('SF001');
    expect(solidRocket.engine).toBe('solid');
    expect(solidRocket.category).toBe('valkyria');
    expect(solidRocket.nozzle).toBe('single');
  });
});
