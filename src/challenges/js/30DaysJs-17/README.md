En este desafío, tendrás que ordenar una lista de productos.

Tu tarea es implementar la lógica de la función `sortByAvailabilityAndPrice`. Esta función recibirá un array de objetos que representan productos, y devolverá una copia ordenada de dicho array.

El ordenamiento se realizará siguiendo dos criterios:

- Primero, los productos disponibles en inventario serán colocados al principio de la lista.
- Luego, los productos serán ordenados por su precio, de manera ascendente.

Es importante destacar que la lista original no sufrirá ninguna modificación, y que la función devolverá una nueva lista con los cambios mencionados.

Ejemplo

```txt
Input:

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]

sortByAvailabilityAndPrice(products)

Output:
[
  { name: "product1", price: 10, inStock: true },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
  { name: "product2", price: 20, inStock: false },
]

```
