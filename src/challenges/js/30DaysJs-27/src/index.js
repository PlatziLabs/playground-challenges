import "./styles.css";
import { Chat } from "./exercise";
import { User } from "./user";

(() => {
  document.getElementById("app").innerHTML = `
  <h1>Chat</h1>
  <div id="chat-container">
    <form id="add-user-form">
      <label for="username">Username:</label>
      <input type="text" id="username">
      <button type="submit">Add user</button>
    </form>
    <form id="send-message-form">
      <label for="message">Message:</label>
      <input type="text" id="message">
      <button type="submit">Send message</button>
    </form>
    <ul id="user-list"></ul>
  </div>
  <p><pre><code id="rta"></code></pre></p>
    `;

  const rtaElement = document.getElementById("rta");

  const chat = new Chat();
  const userList = document.getElementById("user-list");
  const addUserForm = document.getElementById("add-user-form");
  const sendMessageForm = document.getElementById("send-message-form");

  addUserForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const user = new User(username);

      chat.addUser(user);

      const userListItem = document.createElement("li");

      userListItem.id = username;
      userListItem.textContent = username;
      userList.appendChild(userListItem);
      addUserForm.reset();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  sendMessageForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const message = document.getElementById("message").value;
      chat.sendMessage(message);
      chat.users.forEach((user) => {
        const element = document.getElementById(user.name);
        element.innerHTML = "";
        element.innerHTML = user.name;
        user.messages.forEach((message) => {
          element.innerHTML += ` ${message}`;
        });
      });
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
