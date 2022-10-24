
Tienes un array de productos con los siguientes atributos:

- name
- price
- stock

Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de **$1000** el resultado de los "taxes" será **$190**, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

La solución debería tener un input y output como los siguientes:

```js
solution([
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
  ...
]);
```

Output

```js
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  },
  ...
]
```
