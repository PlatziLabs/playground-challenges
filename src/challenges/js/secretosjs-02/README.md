El Capitán DC está presentando problemas para navegar la nave espacial. Una y otra vez indica la dirección para entrar en la trayectoria correcta, pero misteriosamente la nave sigue cambiando de dirección sin su autorización.

La estación espacial revisó los registros e identifico las siguientes vulnerabilidades:

- Es posible clonar la llave de acceso a la nave desde la propiedad `_spaceShipKey` del Capitán DC.
- Es posible clonar la llave de acceso a la nave desde la propiedad `_key` de la misma nave.

En la sección de recursos de la clase podrás encontrar las herramientas de JavaScript que podrían ayudarte a solucionar el problema.

Ejemplo 1:

```js
// Input
const rocket99 = new SpaceShip({ key: "__LLAVE_DE_ACCESO__" });
const capitandc = new Astronaut({ name: "Capitán DC" });
rocket99.getAccessKey(capitandc);
capitandc.navigate(rocket99, "left");

console.log(rocket99._movements);

// Output
["left"]
```

Ejemplo 2:

```js
// Input
const rocket99 = new SpaceShip({ key: "__LLAVE_DE_ACCESO__" });
const capitandc = new Astronaut({ name: "Capitán DC" });
rocket99.getAccessKey(capitandc);

const comandanteJuanita = new Astronaut({ name: "Comandante Juanita" });
comandanteJuanita._spaceShipKey = capitandc._spaceShipKey;
comandanteJuanita.navigate(rocket99, "right");

console.log(rocket99._movements);

// Output
["Incorrect Access Key"]
```

Ejemplo 3:

```js
// Input
const rocket99 = new SpaceShip({ key: "__LLAVE_DE_ACCESO__" });
const capitanimpostor = {
  name: "Capitán Impostor",
  _spaceShipKey: rocket99._key,
  navigate(spaceShip, direction) {
    spaceShip.navigator(direction, { accessKey: this._spaceShipKey });
  }
};
capitanimpostor.navigate(rocket99, "COLISSION");

console.log(rocket99._movements);

// Output
["Incorrect Access Key"]
```
