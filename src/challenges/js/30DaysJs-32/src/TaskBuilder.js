import { Task } from "./exercise";

export class TaskBuilder {
  constructor() {
    this.task = new Task();
  }

  setId(id) {
    this.task.id = id;
    return this;
  }

  setDescription(description) {
    this.task.description = description;
    return this;
  }

  setCompleted(completed) {
    this.task.completed = completed;
    return this;
  }

  setUsers(users) {
    for (const user of users) {
      this.task.assignUser(user);
    }
    return this;
  }

  setDeadline(deadline) {
    this.task.deadline = deadline;
    return this;
  }

  setPriority(priority) {
    this.task.priority = priority;
    return this;
  }

  build() {
    return this.task;
  }
}
