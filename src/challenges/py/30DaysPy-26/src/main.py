class TaskManager:
  def __init__(self):
    self.tasks = {}
    self.count = 0

  def addTask(self, task, tags):
    task = task.lower()
    if task in self.tasks:
      self.tasks[task].update(tags)
    else:
      self.tasks[task] = set(tags)
    self.count += 1

  def printTasks(self):
    return self.tasks
   
myTaskManager = TaskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"])
myTaskManager.addTask("Sacar al perro", ["mascotas"])
myTaskManager.addTask("Hacer ejercicio", ["salud"])