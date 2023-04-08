import { Authorization } from "./Authorization";
import { TaskBuilder } from "./TaskBuilder";
import { TaskDecorator } from "./TaskDecorator";
import { TaskManager } from "./TaskManager";
import { User } from "./User";
import { Task } from "./exercise";

describe('Task', () => {
  it('completeTask() should change the property completed to true', () => {
    const task = new Task('1', 'Comprar leche')
    task.completeTask()
    expect(task.completed).toBe(true)
  })

  it('notifyUsers() should call the method notify() of all assigned users', () => {
    const user1 = new User('Juan')
    const user2 = new User('Maria')
    const task = new Task('2', 'Lavar el auto')
    task.assignUser(user1)
    task.assignUser(user2)
    const spy1 = jest.spyOn(user1, 'notify')
    const spy2 = jest.spyOn(user2, 'notify')
    task.completeTask()
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)
  })

  it('Should throw an error if user is not an instance of User', () => {
    const user1 = { name: 'Juan', role: 'admin' }
    const task = new Task('3', 'Hacer ejercicio')
    expect(() => task.assignUser(user1)).toThrowError()
  })

  it('checkAuthorization() should not throw an error if the user is authorized', () => {
    const authorization = new Authorization()
    const user1 = new User("Juan")
    const user2 = new User("Maria")
    const task = new Task('4', 'Comprar pan')
    task.assignUser(user1)
    task.assignUser(user2)
    expect(() => authorization.checkAuthorization(user1, task)).not.toThrow()
  })

  it('checkAuthorization() should throw an error if the user is not authorized', () => {
    const authorization = new Authorization()
    const user1 = new User("Juan")
    const user2 = new User("Maria")
    const task = new Task('4', 'Comprar pan')
    task.assignUser(user1)
    expect(() => authorization.checkAuthorization(user2, task)).toThrow()
  })

  it('TaskDecorator should have all the properties of the original Task', () => {
    const task = new Task('5', 'Pasear al perro')
    const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })
    expect(taskDecorator.task.id).toBe('5')
    expect(taskDecorator.task.description).toBe('Pasear al perro')
    expect(taskDecorator.task.completed).toBe(false)
    expect(taskDecorator.task.users).toEqual([])
    expect(typeof taskDecorator.completeTask).toBe('function')
  })

  it('TaskDecorator should have the additional properties', () => {
    const task = new Task('6', 'Hacer la cena')
    const taskDecorator = new TaskDecorator(task, { priority: 'media' })
    expect(taskDecorator.priority).toBe('media')
  })

  it('TaskBuilder should build a task with all the properties', () => {
    const taskBuilder = new TaskBuilder();
    taskBuilder.setId("1");
    taskBuilder.setDescription("Comprar leche");
    taskBuilder.setCompleted(false);
    const user1 = new User("Juan")
    const user2 = new User("Maria")
    taskBuilder.setUsers([user1, user2]);
    taskBuilder.setDeadline("2023-03-31");
    taskBuilder.setPriority("alta");
    const task = taskBuilder.build();

    expect(task).toBeInstanceOf(Task);
    expect(task.id).toBe("1");
    expect(task.description).toBe("Comprar leche");
    expect(task.completed).toBe(false);
    expect(task.users).toEqual([user1, user2]);
    expect(task.deadline).toBe("2023-03-31");
    expect(task.priority).toBe("alta");
  });

  const mockTask = new Task(1, "Mock task")
  it('Should exist an unique instance', () => {
    const taskManager1 = TaskManager.getInstance();
    const taskManager2 = TaskManager.getInstance();

    expect(taskManager1).toBe(taskManager2);
  });

  it('should add a task correctly', () => {
    const taskManager = TaskManager.getInstance();
    taskManager.addTask(mockTask);
    const tasks = taskManager.getTasks();
    expect(tasks).toContain(mockTask);
  });

  it('should get a task by id correctly', () => {
    const taskManager = TaskManager.getInstance();
    taskManager.addTask(mockTask);
    const task = taskManager.getTaskById(mockTask.id);
    expect(task).toEqual(mockTask);
  });

  it('should return null when task does not exist', () => {
    const taskManager = TaskManager.getInstance();
    const task = taskManager.getTaskById(999);
    expect(task).toBe(null);
  });
});