## Exercise 4. Testing Rocket Prototypes.

## Description

The rockets production is going so well that plans to build version 2 of the **`Galaxy`** and the **`Odissey`** are on the table. The engineering build team agree want to test a couple of new configurations **`over created rockets before deliver the new versions`**.

For example, some of these configurations consider the use of a **`Double Nozzle`** and a **`Liquid Fuel engine`** in a **`Galaxy`** rocket, the same for the **`Odissey`**.

The team agree that some **`Prototypes`** from the existing rocket must be created and then work.

Application engineering team agree that they don't want to create new entities for each prototype, so they are thinking in a way to work instances of the existing rockets. Do you know something we can use?

## Implementation plan

1. Make the common `Product` implements the functionality for create a prototype based in the existing instances of it.
2. Complete the implementation of the **`Galaxy`** and **`Odissey`** Rockets, making both implement the common `Product` behavior.
3. Make sure instances from both rockets return correct prototypes in their `clone` functionality.

## Resources

In the Resources section, you'll find links to Platzi classes that cover the tools and skills required to complete this task and an image that explains what the challenge tries to solve.

[Link to class](https://platzi.com/clases/6933-patrones-diseno-creacionales/60883-implementacion-de-prototype-en-js/)
