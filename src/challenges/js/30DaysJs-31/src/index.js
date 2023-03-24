import "./styles.css";
import { Newsletter } from "./exercise";
import { Subscriber } from "./Subscriber";

(() => {
  document.getElementById("app").innerHTML = `
    <h1>Prueba de la clase Newsletter y Subscriber</h1>
    <p>Añade el email de un suscriptor:</p>
    <input type="email" id="emailInput" placeholder="email">
    <p><button id="addSubscriberButton">Añadir</button></p>
    <p>Artículo:</p>
    <p><input type="text" id="articleTitleInput" placeholder="title"></p>
    <p><input type="text" id="articleContentInput" placeholder="content"></p>
    <p><button id="postArticleButton">Publicar</button></p>
    <p>Suscriptores:</p>
    <ul id="subscriberList">
    </ul>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const rtaElement = document.getElementById("rta");

  const newsletter = new Newsletter();
  const emailInput = document.getElementById("emailInput");
  const addSubscriberButton = document.getElementById("addSubscriberButton");
  const subscriberList = document.getElementById("subscriberList");
  const articleTitleInput = document.getElementById("articleTitleInput");
  const articleContentInput = document.getElementById("articleContentInput");
  const postArticleButton = document.getElementById("postArticleButton");

  addSubscriberButton.addEventListener("click", () => {
    try {
      const email = emailInput.value;
      const subscriber = new Subscriber(email);
      newsletter.subscribe(subscriber);
      const li = document.createElement("li");
      li.innerHTML = email;
      subscriberList.appendChild(li);
      emailInput.value = "";
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  postArticleButton.addEventListener("click", () => {
    try {
      const title = articleTitleInput.value;
      const content = articleContentInput.value;
      const article = { title, content };
      newsletter.post(article);
      articleTitleInput.value = "";
      articleContentInput.value = "";
      rtaElement.innerHTML = "Revisa la consola del playground";
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });

  // runBtn.addEventListener("click", () => {
  //   try {
  //     const rta = mergeArrays(arrayA, arrayB);
  //     rtaElement.innerHTML = JSON.stringify(rta);
  //   } catch (error) {
  //     rtaElement.innerHTML = JSON.stringify(error, null, 1);
  //   }
  // });
})();
