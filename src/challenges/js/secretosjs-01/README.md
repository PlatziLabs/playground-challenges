El Capitan DC envió un mensaje por medio del Satélite Platzi Sat01 para avisarnos que el sistema de comunicación presenta vulnerabilidades.

Nuestro equipo ejecutó una función de simulación e identificó los siguientes problemas:

- El satélite no valida si quien envía el mensaje es astronauta
- El satélite no valida si quien recibe el mensaje es una estación espacial
- El satélite no valida si quien envía el mensaje es parte de la tripulación de la estación espacial que recibe el mensaje

En el sistema de recursos encontrarás las clases de Platzi donde puedes aprender las herramientas necesarias para cumplir esta misión.

Ejemplo 1:

```js
// Input
const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
const capitanDC = new Astronaut({ name: 'Capitán DC' });
const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial Platzi' });
estacionPlatzi.addTeamMember(capitanDC);
satelitePlatziSat01.send({
  from: capitanDC,
  to: estacionPlatzi,
  text: "SOS",
});
console.log(satelitePlatziSat01.messages);

// Output
[
 {
  "from": "Capitán DC",
  "to": "Estación Espacial Platzi",
  "text": "SOS"
 }
]
```

Ejemplo 2:

```js
// Input
const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
const comandanteJuanita = new Astronaut({ name: 'Comandante Juanita' });
const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial Platzi' });
satelitePlatziSat01.send({
  from: comandanteJuanita,
  to: estacionPlatzi,
  text: "Todo en orden",
});
console.log(satelitePlatziSat01.messages);

// Output
[]
```

Ejemplo 3:

```js
// Input
const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
const capitanImpostor = { name: 'Capitan Impostor' };
const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial Platzi' });
satelitePlatziSat01.send({
  from: capitanImpostor,
  to: estacionPlatzi,
  text: "MUAJAJA",
});
console.log(satelitePlatziSat01.messages);

// Output
[]
```

Ejemplo 4:

```js
// Input
const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
const capitanImpostor = { name: 'Capitan Impostor' };
const estacionFalsa = { name: 'Estacion Espacial Falsa', team: ["Capitan Impostor"] };
satelitePlatziSat01.send({
  from: capitanImpostor,
  to: estacionFalsa,
  text: "MUAJAJA2",
});
console.log(satelitePlatziSat01.messages);

// Output
[]
```
