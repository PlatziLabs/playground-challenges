La nave del Capitán DC ya se encuentra fuera de peligro, pero hubo complicaciones para recuperar la trayectoria inicial, ya que el motor no guardó el historial de motores encendidos y apagados durante el cambio de trayecto.

Necsitamos tu ayuda para actualizar el motor con los siguientes requerimientos:

- Conectar todas las instancias de la clase Motor a una misma instancia de la clase History (en el mismo historial deben aparecer los cambios de todos los motores)
- Guardar un historial de todos los cambios en el estado de los motores (solo hay 2 estados: encendido y apagado)
- No guardar 2 veces seguidas el mismo cambio (e.j. si el último objeto del historial indica que el motor derecho se apagó, no guardar el mismo objeto exactamente después)

Ejemplo:

```js
// Input
const history = new History();
const motorUp = new Motor("up", history);
const motorDown = new Motor("down", history);
motorUp.turnOn();
motorDown.turnOn();
motorUp.turnOff();
motorUp.turnOff(); // Repetido
motorUp.turnOn();
motorUp.turnOn(); // Repetido
motorDown.turnOff();
console.log(history.getFullState());

// Output
[
 {
  "propulsionTo": "up",
  "status": "on"
 },
 {
  "propulsionTo": "down",
  "status": "on"
 },
 {
  "propulsionTo": "up",
  "status": "off"
 },
 {
  "propulsionTo": "up",
  "status": "on"
 },
 {
  "propulsionTo": "down",
  "status": "off"
 }
]
```
