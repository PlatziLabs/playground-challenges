En este desafío, debes crear un organizador de tareas utilizando Maps y Sets en Python. En lugar de utilizar closures, vamos a implementar una solución basada en clases que contenga dos métodos:

- El método `addTask` se encargará de agregar tareas al Map. Es importante convertir todas las letras de la tarea a minúsculas usando `lower()` para verificar si la tarea ya existe. En caso de que exista, se agregarán las nuevas etiquetas al Set correspondiente. Si la tarea no existe, se creará una nueva entrada en el Map con un Set de etiquetas inicializado con las etiquetas proporcionadas.

- El método `printTasks` se encargará de retornar todas las tareas creadas con sus etiquetas. 

Ejemplo 1:

```txt
Input: 

myTaskManager = TaskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"])
myTaskManager.addTask("Sacar al perro", ["mascotas"])
myTaskManager.addTask("Hacer ejercicio", ["salud"])

myTaskManager.printTasks()

Output:

{
  'comprar leche': {'compras', 'urgente'}, 
  'sacar al perro': {'mascotas'}, 
  'hacer ejercicio': {'salud'}
}

```

Ejemplo 2:

```txt
Input:

myTaskManager = TaskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"])
myTaskManager.addTask("Sacar al perro", ["mascotas"])
myTaskManager.addTask("Hacer ejercicio", ["salud"])
myTaskManager.addTask("Comprar leche", ["lacteos"])

myTaskManager.printTasks()

Output:

{ 
  "comprar leche": {"compras", "urgente", "lacteos"}, 
  'sacar al perro': {'mascotas'}, 
  'hacer ejercicio': {'salud'}
}
```
