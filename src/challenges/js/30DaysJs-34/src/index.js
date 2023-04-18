import "./styles.css";
import { ContactList } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h1>Contact List</h1>
    <form id="contact-form">
      <p><label for="name">Name:</label></p>
      <p><input type="text" id="name" name="name" placeholder="Write a name" required ></p>
      <p><label for="phone">Phone:</label></p>
      <p><input type="text" id="phone" name="phone" placeholder="Write a phone number" required></p>
      <p><button id="insertBtn" type="button">Insert </button></p>
      <p><button id="getBtn" type="button"> Get </button></p>
      <p><button id="deleteBtn" type="button"> Delete </button></p>
      <p><button id="retrieveBtn" type="button"> Retrieve all </button></p>
    </form>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaElement = document.getElementById("rta");

  const insertButton = document.querySelector("#insertBtn");
  const getButton = document.querySelector("#getBtn");
  const deleteButton = document.querySelector("#deleteBtn");
  const retrieveButton = document.querySelector("#retrieveBtn");

  const contactList = new ContactList(100);

  insertButton.addEventListener("click", () => {
    try {
      const name = document.querySelector("#name").value;
      const phone = document.querySelector("#phone").value;
      contactList.insert(name, phone);
      displayResult(`Inserted: ${name} - ${phone}`);
      resetValues();
    } catch (error) {
      console.log(error);
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  getButton.addEventListener("click", () => {
    try {
      const name = document.querySelector("#name").value;
      const phone = contactList.get(name);
      displayResult(`Got: ${name} - ${phone}`);
      resetValues();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  deleteButton.addEventListener("click", () => {
    try {
      const name = document.querySelector("#name").value;
      contactList.delete(name);
      displayResult(`Deleted: ${name}`);
      resetValues();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  retrieveButton.addEventListener("click", () => {
    try {
      const contacts = contactList.retrieveAll();
      let result = "";
      for (const contact of contacts) {
        result += `${contact[0]} - ${contact[1]}<br>`;
      }
      displayResult(result);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  function displayResult(result) {
    rtaElement.innerHTML = result;
  }

  function resetValues() {
    document.querySelector("#phone").value = "";
    document.querySelector("#name").value = "";
  }
})();
