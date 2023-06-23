En este desafío, tendrás que implementar un sistema de pagos utilizando polimorfismo.

Debes crear una clase base llamada `Pay` que contenga un único método llamado `make_pay`. Este método recibirá la cantidad a pagar y devolverá un objeto con dos propiedades

- realized: true
- quantity: $cantidadAPagar

Además, deberás crear también las clases `PayPal`, `Card` y `Cash`, donde cada una debe heredar de la clase `Pay`.

La clase PayPal debe recibir un `email` en el constructor y el método `make_pay` debe agregar las propiedades:

- platform: "PayPal"
- email: $EmailRecibido.

La clase `Card` recibirá un número de tarjeta de 16 dígitos. Al momento de acceder al método make_pay, se validará si la tarjeta en cuestión tiene esa longitud. En caso de no tener los 16 dígitos, se debe lanzar una `Exception`. En caso contrario, al método que proviene de Pay, se le agregará la propiedad de `last_card_numbers`: donde se devolverán los últimos 4 dígitos de la tarjeta.

La clase `Cash` simplemente nos devolverá lo mismo que la clase base.

Por último se debe implementar la lógica de la función `process_pay` la cual recibirá un método de pago y la cantidad, para poder devolver el objeto llamando al método make_pay de cada entidad recibida.

> Cada clase tiene su propio archivo dentro del sistema de archvios del playground

Ejemplo 1:

```txt
Input:
card = Card("4913478952471122")

process_pay(card, 100)

Output:

{
  realized: true,
  quantity: 100,
  last_card_numbers: "1122",
}
```

Ejemplo 2:

```txt
Input:

paypal = PayPal("test@mail.com")

process_pay(paypal, 240)

Output:

{
  realized: true,
  quantity: 240,
  platform: "PayPal",
  email: "test@mail.com",
}

```

Ejemplo 3:

```txt
Input:

cash = Cash()

process_pay(cash, 400)

Output:

{
  realized: true,
  quantity: 400,
}
```
