El código actual de la función `restoreIpAddresses` retorna direcciones IP a partir de una cadena `ip`, pero:

- Permite el `0` como un entero válido
- Permite direcciones IP que no necesariamente usan todos los dígitos de la cadena `ip`

Tu desafío es que la función `restoreIpAddresses` retorne únicamente direcciones IP válidas (sin aceptar `0` como entro válido) y que usen todos los dígitos de la cadena `ip`.

Ejemplo 1:

```js
// Input
restoreIpAddresses("25525511135")

// Output
[
  "255.255.111.35",
  "255.255.11.135",
]
```

Ejemplo 2:

```js
// Input
restoreIpAddresses("19216801")

// Output
[
  "19.216.80.1",
  "192.16.80.1"
]
```

Ejemplo 3:

```js
// Input
restoreIpAddresses("01921681")

// Output
[]
```
