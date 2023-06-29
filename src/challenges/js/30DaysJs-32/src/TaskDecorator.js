export class TaskDecorator {
  constructor(task, options) {
    this.task = task
    this.deadline = options.deadline;
    this.priority = options.priority;
  }

  assignUser(user) {
    this.task.assignUser(user);
  }

  completeTask() {
    this.task.completeTask();
  }

  notifyUsers() {
    this.task.notifyUsers();
  }
}