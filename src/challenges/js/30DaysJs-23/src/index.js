import "./styles.css";
import { User } from "./exercise";

(() => {
  const user1 = new User("Juan", 20);
  const user2 = new User("Maria", 25);
  user1.addFriend(user2);

  document.getElementById("app").innerHTML = `
    <h2>Usuarios</h2>
    <div>
      <div id="user1">
        <h2>name: ${user1.name}</h2>
        <p>Age: ${user1._age}</p>
        <p>Friends: ${JSON.stringify(user1._friends)}</p>
        <p id="messages1" >Messages: ${JSON.stringify(user1.showMessages())}</p>
      </div>
      <div id="user2">
        <h2>name: ${user2.name}</h2>
        <p>Age: ${user2._age}</p>
        <p>Friends: ${JSON.stringify(user2._friends)}</p>
        <p id="messages2">Messages: ${JSON.stringify(user2.showMessages())}</p>
      </div>
    </div>
    <p><input placeholder="write a message" id="message" /></p>
    <p><button id="btn">Send message to ${user2.name}</button><p/>
    <p><code id="rta"></code></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
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
