import "./styles.css";
import { taskManager } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h3>Task Manager</h3>
    <form>      
      <p><label for="task">Task:</label></p>
      <p><input type="text" id="task" required></p>

      <p><label for="tags">Tags:</label></p>
      <p><input type="text" id="tags" required></p>

      <p><button type="submit" id="submit-btn">Add Task</button></p>
    </form>

    <h3>Tasks:</h3>
    <ul id="task-list"></ul>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaElement = document.getElementById("rta");
  const tm = taskManager();
  const form = document.querySelector("form");
  const taskList = document.querySelector("#task-list");

  form.addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const taskInput = document.querySelector("#task");
      const tagsInput = document.querySelector("#tags");

      const task = taskInput.value;
      const tags = tagsInput.value.split(",");

      tm.addTask(task, tags);

      taskInput.value = "";
      tagsInput.value = "";

      taskList.innerHTML = "";
      tm.printTasks().forEach((tags, task) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${task}:</strong> ${Array.from(tags).join(
          ", "
        )}`;
        taskList.appendChild(li);
      });
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
