import "./styles.css";
import { MessagesProxy } from "./exercise";
import { User } from "./User";
import { Messages } from "./messages";

(() => {
  document.getElementById("app").innerHTML = `
  <p>Ingrese el nombre de usuario:</p>
  <p><input type="text" placeholder="username" id="username"></p>
  <p><button id="loginButton">Login</button></p>
  <p><button id="logoutButton">Logout</button></p>
  <p>Ingrese el mensaje a enviar:</p>
  <p><input type="text" id="messageInput" placeholder="message" ></p>
  <p><button id="sendButton">Enviar</button></p>
  <p>Historial de mensajes:</p>
  <ul id="messageHistory">

  </ul>
  <p id="error"></p>
  `;

  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const messageHistory = document.getElementById("messageHistory");
  const errorElement = document.getElementById("error");
  const userInput = document.getElementById("username");

  const messages = new Messages();
  let user;

  loginButton.addEventListener("click", () => {
    try {
      const username = userInput.value;
      user = new User(username);
      user.login();
    } catch (error) {
      errorElement.innerHTML = error.message;
    }
  });

  logoutButton.addEventListener("click", () => {
    try {
      const username = userInput.value;
      user = new User(username);
      user.logout();
    } catch (error) {
      errorElement.innerHTML = error.message;
    }
  });

  sendButton.addEventListener("click", () => {
    errorElement.innerHTML = "";
    try {
      const text = messageInput.value;
      const messagesProxy = new MessagesProxy(messages, user);

      messagesProxy.sendMessage(text);
      messageHistory.innerHTML = messages
        .getHistory()
        .map((message) => `<li>${message}</li>`)
        .join("");
    } catch (error) {
      errorElement.innerHTML = error.message;
    }
  });
})();
