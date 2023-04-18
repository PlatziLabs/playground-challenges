import "./styles.css";
import { Authorization } from "./Authorization";
import { TaskBuilder } from "./TaskBuilder";
import { TaskDecorator } from "./TaskDecorator";
import { TaskManager } from "./TaskManager";
import { User } from "./User";
import { Task } from "./exercise";


(() => {
  document.getElementById("app").innerHTML = `
  <h3>Task Manager</h3>
  <code id="error" ></code>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Descripción</th>
      <th>Prioridad</th>
      <th>Usuarios asignados</th>
      <th>Deadline</th>
      <th>Realizado por</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  <h3>Add users<h3/>
  <form id="user-form" >
    <label for="name">Nombre:</label>
    <p></p>
    <input type="text" id="name" name="name" required placeholder="escribe un nombre" >
    <p></p>
    <button type="submit">Agregar Usuario</button>
  </form>
  <h3>Add tasks<h3/>
  <form id="task-form" >
    <label for="task-desc">Descripción:</label>
    <p></p>
    <textarea id="task-desc" name="task-desc"></textarea>
    <p></p>
    <label for="task-priority">Prioridad:</label>
    <p></p>
    <select id="task-priority" name="task-priority">
      <option value="high">Alta</option>
      <option value="medium">Media</option>
      <option value="low">Baja</option>
    </select>
    <p></p>

    <label for="task-users">Usuarios asignados:</label>
    <p></p>

    <select multiple id="task-users" name="task-users[]" class="select-user" >
      <option value="User 1">User 1</option>
      <option value="User 2">User 2</option>
      <option value="User 3">User 3</option>
    </select>
    <p></p>

    <label for="task-deadline">Deadline:</label>
    <p></p>

    <input type="date" id="task-deadline" name="task-deadline">
    <p></p>

    <button type="submit">Agregar tarea</button>
  </form>

  `;
  const tbody = document.querySelector("tbody")
  const error = document.querySelector("#error")
  const userForm = document.querySelector("#user-form")
  const taskForm = document.querySelector("#task-form")

  userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = e.target.name.value
    try{
      const user = new User(value)
      users.push(user)
      reloadUsers(user)
      e.target.name.value = ""
    }catch(err){
      error.textContent = err.message
    }
  })

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    try{
      const description = e.target["task-desc"].value
      const priority = e.target["task-priority"].value
      const usersNode = document.getElementById("task-users")
      const selectedValues = Array.from(usersNode.selectedOptions).map(option => option.value);
      const deadline = e.target["task-deadline"].value
  
      const lengthTasks = taskManager.getTasks().length + 1
      const task = new Task(lengthTasks, description)
      selectedValues.forEach(value => {
        task.assignUser(users.find(user => user.name === value))
      })
      const taskDecorator = new TaskDecorator(task, { priority, deadline })
      taskManager.addTask(taskDecorator)
      printTask(taskDecorator)
    }catch(err){
      error.textContent = err.message
    }


  })

  let taskManager
  let users = []

  try{
    taskManager = new TaskManager()
    const task1 = new Task(1, "Tarea 1")
    const task2 = new Task(2, "Tarea 2")
    const task3 = new Task(3, "Tarea 3")
    
    const user1 = new User("User 1")
    const user2 = new User("User 2")
    const user3 = new User("User 3")

    users.push(user1, user2, user3)

    task1.assignUser(user1)
    task2.assignUser(user2)
    task3.assignUser(user3)


    taskManager.addTask(
      new TaskDecorator(
        task1 ,      
        {
          priority: "medium",
          deadline: "2023-03-30"
        }
      )
    )
    taskManager.addTask(
      new TaskDecorator(
        task2,      
        {
          priority: "High",
          deadline: "2023-03-30"
        }
      )
    )
    taskManager.addTask(
      new TaskDecorator(
        task3,      
        {
          priority: "low",
          deadline: "2023-03-30"
        }
      )
    )
    taskManager.getTasks().forEach(task => {
      printTask(task)
    })
  }catch(err){
    error.textContent = err.message
  }

  function checkUser(select, task) {
    const row = select.parentNode.parentNode
    const user = users.find(user => user.name === select.value)
    const auth = new Authorization()
    try{
      auth.checkAuthorization(user, task.task)
      console.log(task.completeTask())
      error.textContent = "¡Completado! Revisa la consola"
      row.style.backgroundColor = "green"
    }catch(err){
      console.log(err)
      row.style.backgroundColor = "red"
      error.textContent = err.message
    }
  }

  function printTask(task) {
    try{

      const btn = document.createElement("button")
      const select = document.createElement("select") 
      const tr = document.createElement("tr")
      const td = document.createElement("td")

      select.className = "select-user"

      users.forEach(user => {
        select.innerHTML += `
          <option value="${user.name}">${user.name}</option>
        `
      })
      btn.textContent = "confirmar"
      btn.addEventListener("click", () =>{
        checkUser(select, task)
      })

      tr.innerHTML = `
      <td>${task.task.id}</td>
      <td>${task.task.description}</td>
      <td>${task.priority}</td>
      <td>${task.task.users.map(user => user.name).join("")}</td>
      <td>${task.deadline}</td>
      </td>
      `
      td.append(select, btn)
      tr.appendChild(td)

      tbody.appendChild(tr)
    }catch(err){
      error.textContent = err
    }
  }

  function reloadUsers(user){
    const selects = document.querySelectorAll(".select-user")
    selects.forEach(select => {
      select.innerHTML += `
        <option value="${user.name}">${user.name}</option>
      `
    })
  }
})();

