Welcome to **`Platzi-X`** a rockets manufacturing, design and launcher company!

Today is your first day solving the test for ingress the software engineering team in the rockets manufacturing division and guess what?! You already have work to do.

The company is manufacturing two different rockets in different factories, the one based in **`Liquid Fuel`** and the one based in **`Solid Fuel`** based. All the rockets created must contain the following elements:

1. Model (e.g. ST001)
2. Engine type (liquid or solid fuel)
3. Class (heavy or light)
4. Nozzle type (double or single)

Right now the application that manage the manufacturing is a mess, so your job is implement a rockets creation process that considers the possibility to add new rockets and their factories in the future.

## Implementation Plan

1. Complete the code of `Rocket` entity for define the common rocket properties.
2. Create entities for both `Liquid Fuel Rocket` and `Solid Fuel Rocket`, ensuring they share the common `Rocket` characteristics.
3. Complete the code of `RocketFactory` entity, define the common factory `createRocket` process.
4. Create a factory entity for each type of rocket. Remember, they must implement their own version of the creation process.
5. The `Liquid Fuel Rocket Factory` should manufacture rockets with the following properties:
   1. Model: LF001
   2. Engine: liquid
   3. Category: hermes
   4. Nozzle: double
6. The `Solid Fuel Rocket Factory` should manufacture rockets with the following properties:
   1. Model: SF001
   2. Engine: solid
   3. Category: valkyria
   4. Nozzle: single

## Code Examples

```js
// Liquid fuel rocket
const liquidFuelRocketFactory = new LiquidFuelRocketFactory();
const liquidFuelRocket = liquidFuelRocketFactory.createRocket();

// Solid fuel rocket
const solidFuelRocketFactory = new SolidFuelRocketFactory();
const solidFuelRocket = solidFuelRocketFactory.createRocket();
```

## Resources

In the Resources section, you'll find links to Platzi classes that cover the tools and skills required to complete this task and an image that explains what the challenge tries to solve.
