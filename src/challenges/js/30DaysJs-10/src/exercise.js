export function createTaskPlanner() {
  let tasks = [];

  return {
    addTask(task) {
      task.completed = false;
      tasks.push(task);
    },

    removeTask(value) {
      if (typeof value === "number") {
        tasks = tasks.filter((task) => task.id !== value);
      } else {
        tasks = tasks.filter((task) => task.name !== value);
      }
    },

    getTasks() {
      return tasks;
    },

    getPendingTasks() {
      return tasks.filter((task) => !task.completed);
    },

    getCompletedTasks() {
      return tasks.filter((task) => task.completed);
    },

    markTaskAsCompleted(value) {
      let index;

      if (typeof value === "number") {
        index = tasks.findIndex((task) => task.id === value);
      } else {
        index = tasks.findIndex((task) => task.name === value);
      }

      tasks[index].completed = true;
    },

    getSortedTasksByPriority() {
      const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
      return sortedTasks;
    },

    filterTasksByTag(tag) {
      return tasks.filter((task) => task.tags.includes(tag));
    },

    updateTask(taskId, updates) {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index] = { ...tasks[index], ...updates };
    },
  };
}
