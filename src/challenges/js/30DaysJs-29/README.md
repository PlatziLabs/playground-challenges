En este reto, deberás utilizar el patrón decorator para personalizar productos en una tienda.

La clase abstracta de la cual interactuarán los decoradores se encuentra en el archivo `product.js` el cual puedes ver dentro del sistema de archivos del playground.

La tienda ofrece productos con un precio base y una descripción, pero a veces los clientes quieren agregar extras, como una garantía o un seguro de envío. Tu objetivo es implementar el patrón decorator para permitir a los clientes personalizar sus productos con estos extras.

Debes implementar la lógica de las siguientes clases (cada una con su respectivo archivo dentro del coding playground):

- `BasicProduct(price, product)`: heredará de la clase Product y retornará el nombre del producto al implementar el método `getDescription`.
- `WarrantyDecorator(basicProduct)`: heredará de Product, pero deberá sumar 20$ al precio final y agregarle el string "con garantía" a la descripción del producto.
- `ShippingInsuranceDecorator(basicProduct)`: heredará de Product e igual que WarrantyDecorator, sumará 20 al precio final y agregará el string "con seguro de envío" a la descripción del producto.

Ejemplo 1:

```txt
Input:
const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());
Output:
140
"Camisa de algodón con garantía con seguro de envío"
```

Ejemplo 2:

```txt
Input:
const basicProduct = new BasicProduct(5000, "Refrigerador");
const withWarranty = new WarrantyDecorator(basicProduct);
console.log(withWarranty.getPrice());
console.log(withWarranty.getDescription());
Output:
5020
"Refrigerador con garantía"
```

Ejemplo 3:

```txt
Input:
const basicProduct = new BasicProduct(5000, "Refrigerador");
const withShippingInsurance = new ShippingInsuranceDecorator(basicProduct);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());
Output:
5020
"Refrigerador con seguro de envío"
```