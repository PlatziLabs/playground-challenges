import "./styles.css";
import { createTaskPlanner } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>Task planner</h2>
    <div id="table" >
      <div id="table--header">
        <p>Id</p>
        <p>Name</p>
        <p>Priority</p>
        <p>Completed</p>
        <p>Tags</p>
      </div>
      <div id="table--content">

      </div>
    </div>
    <div class="options" >
      <form id="add-form" >
        <p><label for="identifier"> Id </label></p>
        <p><input type="number" min=0 name="identifier" placeholder="id" ></p>
        <p><label for="name"> Name </label></p>
        <p><input type="text" name="task-name" placeholder="name" ></p>
        <p><label for="priority"> Priority </label></p>
        <p><input type="number" min=0 max=3 name="priority" placeholder="priority" ></p>
        <p><label for="tags"> Tags </label></p>
        <p><input placeholder="tags" type="text" name="tags" ></p>
        <p><button type="submit" >Add task</button><p/>
        </form>
        <form id="remove-form">
          <p><label for="name"> Value </label></p>
          <p><input type="text" name="task-value" placeholder="value" ></p>
          <p><button type="submit" >remove task</button><p/>
        </form>
        <form id="completed-form">
          <p><label for="name"> name </label></p>
          <p><input type="text" name="task-value" placeholder="task name" ></p>
          <p><button type="submit" >complete task</button><p/>
        </form>
        <form id="filter-form">
          <p><label for="name"> tag </label></p>
          <p><input type="text" name="task-value" placeholder="tag" ></p>
          <p><button type="submit" >filter by tag</button><p/>
        </form>
        <div>
          <p><button id="get-tasks">get tasks</button></p>
          <p><button id="completed-tasks">get completed tasks</button></p>
          <p><button id="pending-tasks">get pending tasks</button></p>
          <p><button id="sorted-tasks">get sorted tasks</button></p>
        </div>
    </div>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaElement = document.getElementById("rta");
  const tableContent = document.getElementById("table--content");

  const addForm = document.getElementById("add-form");

  const removeForm = document.getElementById("remove-form");
  const completeForm = document.getElementById("completed-form");
  const filterForm = document.getElementById("filter-form");
  const completedTasksBtn = document.getElementById("completed-tasks");
  const getTasksBtn = document.getElementById("get-tasks");
  const pendingTasksBtn = document.getElementById("pending-tasks");
  const sortedTasksBtn = document.getElementById("sorted-tasks");

  let tasks = [
    {
      id: 1,
      name: "Comprar leche",
      priority: 3,
      completed: false,
      tags: ["shopping", "home"],
    },

    {
      id: 2,
      name: "Llamar a Juan",
      priority: 1,
      completed: false,
      tags: ["personal"],
    },
  ];

  function printTasksInTable(tasks) {
    tableContent.innerHTML = "";
    for (const task of tasks) {
      tableContent.innerHTML += `
      <div class="table--row" >
        <p>${task.id}</p>
        <p>${task.name}</p>
        <p>${task.priority}</p>
        <p>${task.completed ? "✅" : "❌"}</p>
        <p>${task.tags.join(" | ")}</p>
      </div>
      `;
    }
  }

  function getPlanner() {
    const planner = createTaskPlanner();

    for (const task of tasks) {
      planner.addTask(task);
    }

    return planner;
  }

  printTasksInTable(tasks);

  addForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const planner = getPlanner();
      const newTask = {
        id: Number(addForm.identifier.value),
        name: addForm["task-name"].value,
        priority: Number(addForm.priority.value),
        tags: addForm.tags.value.split(","),
      };

      planner.addTask(newTask);

      tasks = planner.getTasks();
      printTasksInTable(tasks);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  removeForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const planner = getPlanner();
      const name = removeForm["task-value"].value;

      planner.removeTask(name);
      tasks = planner.getTasks();
      printTasksInTable(tasks);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  completeForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const planner = getPlanner();
      const name = completeForm["task-value"].value;

      planner.markTaskAsCompleted(name);
      tasks = planner.getTasks();
      printTasksInTable(tasks);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  filterForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const planner = getPlanner();
      const name = filterForm["task-value"].value;

      const rta = planner.filterTasksByTag(name);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  getTasksBtn.addEventListener("click", () => {
    try {
      const planner = getPlanner();
      console.log(planner);
      const rta = planner.getTasks();
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  completedTasksBtn.addEventListener("click", () => {
    try {
      const planner = getPlanner();
      const rta = planner.getCompletedTasks();
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  pendingTasksBtn.addEventListener("click", () => {
    try {
      const planner = getPlanner();
      const rta = planner.getPendingTasks();
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  sortedTasksBtn.addEventListener("click", () => {
    try {
      const planner = getPlanner();
      const rta = planner.getSortedTasksByPriority();
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
