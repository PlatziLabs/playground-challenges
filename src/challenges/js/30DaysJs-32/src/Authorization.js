export class Authorization {
  checkAuthorization(user, task) {
    if (!task.users.includes(user)) {
      throw new Error("No autorizado");
    }
  }
}
