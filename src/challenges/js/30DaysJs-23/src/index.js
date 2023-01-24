import "./styles.css";
import { User } from "./exercise";

(() => {
  let user1;
  let user2;

  document.getElementById("app").innerHTML = `
    <h2>Usuarios</h2>
    <div>
      <div id="user1">
      </div>
      <div id="user2">
      </div>
    </div>
    <p><input placeholder="write a message" id="message" /></p>
    <p><button id="btn">Send message</button><p/>
    <p><code id="rta"></code></p>
  `;

  const user1Container = document.getElementById("user1");
  const user2Container = document.getElementById("user2");
  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  try {
    user1 = new User("Juan", 20);
    user2 = new User("Maria", 25);
    user1.addFriend(user2);
    user1Container.innerHTML = `
      <h2>name: ${user1.name}</h2>
      <p>Age: ${user1._age}</p>
      <p>Friends: ${JSON.stringify(user1._friends)}</p>
      <p id="messages1" >Messages: ${JSON.stringify(user1.showMessages())}</p>
    `;
    user2Container.innerHTML = `
      <h2>name: ${user2.name}</h2>
      <p>Age: ${user2._age}</p>
      <p>Friends: ${JSON.stringify(user2._friends)}</p>
      <p id="messages2">Messages: ${JSON.stringify(user2.showMessages())}</p>
    `;
  } catch (err) {
    rtaElement.innerHTML =
      "En cuanto soluciones el reto, la vista debería cargar datos de usuarios 🔥";
  }

  const messagesUser1 = document.querySelector("#messages1");
  const messagesUser2 = document.querySelector("#messages2");
  const input = document.getElementById("message");

  runBtn.addEventListener("click", () => {
    try {
      const message = input.value;
      user1.sendMessage(message, user2);
      messagesUser1.innerHTML = `Messages: ${JSON.stringify(
        user1.showMessages()
      )}`;
      messagesUser2.innerHTML = `Messages: ${JSON.stringify(
        user2.showMessages()
      )}`;
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
