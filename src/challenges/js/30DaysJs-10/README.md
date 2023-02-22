En este desafío debes implementar la lógica de un planificador de tareas.

El planificador de tareas nos debe permitir agregar, eliminar y marcar como completadas tareas, así como también mostrar unos registros de las mismas. Para ello, se debe crear una función `createTaskPlanner` que devuelva un objeto con las siguientes propiedades y métodos:

- `tasks`: un array vacío que almacenará las tareas pendientes con un formato específico como un objeto con propiedades `id`, `name`, `priority`, `tags` y `completed`. El estado completed debe ser agregado automáticamente como false al momento de agregar una tarea.
- `addTask(task)`: recibe un objeto con la tarea y la agregue al array de tareas.
- `removeTask(value)`: recibe el id o nombre de la tarea y la elimina del array de tareas.
- `getTasks()`: Devuelve el array de tareas.
- `getPendingTasks()`: Devuelve solo las tareas pendientes.
- `getCompletedTasks()`: Devuelve solo las tareas completadas.
- `markTaskAsCompleted(value)`: Recibe el id o nombre de la tarea y la marca como completada.
- `sortTasksByPriority()`: Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
- `filterTasksByTag(tag)`: Filtra las tareas por una etiqueta específica.
- `updateTask(taskId, updates)`: Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.

Ejemplo 1:

```txt
Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan")

Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]
```

Ejemplo 2:

```txt
Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

Output:
planner.filterTasksByTag("shopping")
[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}]
```
