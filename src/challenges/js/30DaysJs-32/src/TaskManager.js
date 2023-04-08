import { Task } from "./exercise";

export class TaskManager {
  constructor() {
    this.tasks = []
  }

  static getInstance() {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  addTask(task){
    this.tasks.push(task)
  }

  getTasks(){
    return this.tasks
  }

  getTaskById(id){
    const task = this.tasks.filter(task => task.id === id)[0]
    if(task){
      return task
    }

    return null
  }
}