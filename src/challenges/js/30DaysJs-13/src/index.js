import "./styles.css";
import { validateForm } from "./exercise";

(() => {
  const users = [];
  document.getElementById("app").innerHTML = `
    <h2>Validate form</h2>
    <form>
      <label for="name">Name</label>
      <p><input placeholder="write a name" name="name" ></p>
      <label for="lastname">lastname</label>
      <p><input placeholder="write a lastname" name="lastname" ></p>
      <label for="username">email</label>
      <p><input placeholder="write an email" name="email" type="email" ></p>
      <label for="username">password</label>
      <p><input placeholder="write a password" name="password" type="password" ></p>
    </form>
    <p><button type="submit" id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");
  const form = document.querySelector("form");

  runBtn.addEventListener("click", () => {
    try {
      const formData = new FormData(form);
      const data = {};
      for (const [key, value] of formData) {
        data[key] = value;
      }
      const rta = validateForm(data, users);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      console.log(error);
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  });
})();
