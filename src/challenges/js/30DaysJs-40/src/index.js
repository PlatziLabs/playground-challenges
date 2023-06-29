import "./styles.css";
import { Queue } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <code id="error"></code>
    <form id="form" >
      <div>
        <p></p>
        <label for="from">From:</label>
        <p></p>
        <input type="email" id="from" name="from" required>
      </div>
      <div>
        <label for="to">To:</label>
        <p></p>
        <input type="email" id="to" name="to" required>
        <p></p>
      </div>
      <div>
        <label for="subject">Subject:</label>
        <p></p>
        <input type="text" id="subject" name="subject" required>
        <p></p>
      </div>
      <div>
        <label for="body">Body:</label>
        <p></p>
        <textarea id="body" name="body" required></textarea>
        <p></p>
      </div>
      <div>
        <p></p>
        <button type="submit">Enviar</button>
      </div>
    </form>
    <p></p>
    <button type="button" id="dequeue">Eliminar primer email </button
    <p></p>
    <button type="button" id="peek">Seleccionar primer email</button
    <p></p>
    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Subject</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;

  const form = document.querySelector("#form");
  const error = document.querySelector("#error");
  const tbody = document.querySelector("tbody");
  const dequeue = document.querySelector("#dequeue");
  const queueElement = document.querySelector("#peek");

  let queue;
  try {
    queue = new Queue();

    queue.enqueue(
      "jane@ejemplo.com",
      "support@ejemplo.com",
      "No puedo iniciar sesión en mi cuenta",
      "Problema de inicio de sesión"
    );

    reloadTable(queue.last);

    queue.enqueue(
      "joe@ejemplo.com",
      "support@ejemplo.com",
      "Mi pedido no ha llegado todavía",
      "Estado del pedido"
    );

    reloadTable(queue.last);
  } catch (err) {
    error.textContent = err.message;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const to = e.target.to.value;
      const from = e.target.from.value;
      const subject = e.target.subject.value;
      const body = e.target.body.value;
      queue.enqueue(to, from, subject, body);
      reloadTable(queue.last);
    } catch (err) {
      error.textContent = err.message;
    }
  });

  dequeue.addEventListener("click", () => {
    try {
      error.textContent = `Elemento eliminado ${JSON.stringify(
        queue.dequeue()
      )}`;
      tbody.children[0].remove();
    } catch (err) {
      error.textContent = err.message;
    }
  });

  queueElement.addEventListener("click", () => {
    try {
      error.textContent = `Elemento seleccionado ${JSON.stringify(
        queue.peek()
      )}`;
    } catch (err) {
      error.textContent = err.message;
    }
  });

  function reloadTable(element) {
    tbody.innerHTML += `
      <tr>
        <td>${element.to}</td>
        <td>${element.from}</td>
        <td>${element.subject}</td>
        <td>${element.body}</td>
      </tr>
    `;
  }
})();
