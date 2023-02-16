import "./styles.css";
import { sendEmail } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h3>Enviar email</h3>
    <form id="emailForm">
      <p><label for="email">Correo electrónico:</label></p>
      <p><input type="email" id="email" name="email" ></p>

      <p><label for="subject">Asunto:</label></p>
      <p><input type="text" id="subject" name="subject" ></p>

      <p><label for="body">Cuerpo:</label></p>
      <p><textarea id="body" name="body" rows="5" ></textarea></p>

      <p><button type="submit">Enviar</button></p>
    </form>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const emailForm = document.getElementById("emailForm");

  const rtaElement = document.getElementById("rta");

  emailForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const subject = event.target.elements.subject.value;
    const body = event.target.elements.body.value;

    try {
      const emailInfo = await sendEmail(email, subject, body);
      rtaElement.innerHTML = `Correo electrónico enviado a ${emailInfo.email}`;
    } catch (error) {
      rtaElement.innerHTML = `Error: ${error.message}`;
    }
  });
})();
