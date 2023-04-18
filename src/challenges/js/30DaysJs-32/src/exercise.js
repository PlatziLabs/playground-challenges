import { User } from "./User"

export class Task{
  constructor(id, description){
    this.id = id,
    this.description = description
    this.completed = false
    this.users = []
  }

  assignUser(user){
    if(!(user instanceof User)){
      throw new Error("No hereda de la clase user")
    }
    this.users.push(user)
  }

  completeTask() {
    this.completed = true;
    this.notifyUsers()
  }

  notifyUsers() {
    this.users.forEach((user) => {
      user.notify(this);
    });
  }
}