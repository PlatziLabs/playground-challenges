import "./styles.css";
import { protectDog } from "./exercise";

(() => {
  const dog = {
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
  };

  document.getElementById("app").innerHTML = `
    <h2>Protect the dogs</h2>
    <p>Information: </p>
    <p><pre><code>${JSON.stringify(dog)}</code></pre></p>
    <p><button id="btn">Change name</button><p/>
    <p>Information with changes 👇: </p>
    <p><pre><code id="rta"></code></pre></p>
    <p>Ambos objetos deben ser iguales 🚀</p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  runBtn.addEventListener("click", () => {
    try {
      const rta = protectDog(dog);
      rta.name = "firulais";
      rta.owner.name = "Pedro";
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
