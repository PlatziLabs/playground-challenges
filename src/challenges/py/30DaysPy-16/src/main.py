def createTaskPlanner():
  tasks = []

  def addTask(task):
    task['completed'] = False
    tasks.append(task)

  def removeTask(value):
    if isinstance(value, int):
      tasks[:] = [task for task in tasks if task['id'] != value]
    elif isinstance(value, str):
      tasks[:] = [task for task in tasks if task['name'] != value]

  def getTasks():
    return tasks[:]

  def getPendingTasks():
    return [task for task in tasks if not task['completed']]

  def getCompletedTasks():
    return [task for task in tasks if task['completed']]

  def markTaskAsCompleted(value):
    if isinstance(value, int):
      for task in tasks:
        if task['id'] == value:
          task['completed'] = True
          break
    elif isinstance(value, str):
      for task in tasks:
        if task['name'] == value:
          task['completed'] = True
          break

  def getSortedTasksByPriority():
    return sorted(tasks, key=lambda task: task['priority'])

  def filterTasksByTag(tag):
    return [task for task in tasks if tag in task['tags']]

  def updateTask(taskId, updates):
    for task in tasks:
      if task['id'] == taskId:
        task.update(updates)
        break

  return {
    'addTask': addTask,
    'removeTask': removeTask,
    'getTasks': getTasks,
    'getPendingTasks': getPendingTasks,
    'getCompletedTasks': getCompletedTasks,
    'markTaskAsCompleted': markTaskAsCompleted,
    'getSortedTasksByPriority': getSortedTasksByPriority,
    'filterTasksByTag': filterTasksByTag,
    'updateTask': updateTask,
  }
  
taskPlanner = createTaskPlanner()