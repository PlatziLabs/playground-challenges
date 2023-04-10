En este desafío, tu objetivo es implementar una singly linked list para almacenar información sobre pacientes de un hospital. Cada nodo de la lista representará a un paciente y tendrá los siguientes campos:

- Nombre del paciente (string)
- Edad del paciente (number)
- Número de cama asignada al paciente (number)

La lista deberá tener los siguientes métodos:

- addPatient(name, age): agrega un nuevo paciente a la lista, asignándole la próxima cama disponible. Si no hay camas disponibles, debe lanzar un error con el mensaje "No hay camas disponibles".

- removePatient(name): remueve al paciente con el nombre especificado de la lista y libera su cama. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

- getPatient(name): retorna la información del paciente con el nombre especificado en el siguiente formato `{ name, age, bedNumber }`. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

- getPatientList(): retorna una lista con la información de todos los pacientes en la lista, cada paciente deberá tener el siguiente formato `{ name, age, bedNumber }`.

- getAvailableBeds(): retorna un número con el total de camas disponibles.

> Recuerda usar la sintaxis throw new Error() para los errores

Aquí tienes una guía paso a paso de cómo implementar la singly linked list:

Ejemplo 1:

```txt
Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatientList()
Output:

[
  { name: "Paciente 1", age: 20, bedNumber: 1 },
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]
```

Ejemplo 2:

```txt

Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatient("Paciente 1")

Output:
{
  name: "Paciente 1",
  age: 20,
  bedNumber: 1,
}

```

Ejemplo 3:

```txt
Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.removePatient("Paciente 1")

list.getPatientList()

Output:

[
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]
```
