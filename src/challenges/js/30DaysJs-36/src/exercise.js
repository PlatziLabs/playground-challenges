export function taskManager() {
  const tasks = new Map();

  return {
    addTask(task, tags) {
      task = task.toLowerCase();
      if (tasks.has(task)) {
        const existingTags = tasks.get(task);
        tags.forEach((tag) => existingTags.add(tag));
      } else {
        const newTags = new Set(tags);
        tasks.set(task, newTags);
      }
    },

    printTasks() {
      return tasks;
    },
  };
}
