import "./styles.css";
import { Animal, Mammal, Dog } from "./exercise";

(() => {
  try {
    const bird = new Animal("pepe", 1, "bird").getInfo();
    const hippo = new Mammal("bartolo", 3, "hippo", false).getInfo();
    const dog = new Dog("fido", 4, "pastor aleman", true).getInfo();

    document.getElementById("app").innerHTML = `
      <h2>Jerarquía de animales</h2>
      <h3>Bird (from animal): </h3>
      <p>Name: ${bird.name}</p>
      <p>Age: ${bird.age}</p>
      <p>Specie: ${bird.specie}</p>
      <h3>hippo (from mammal): </h3>
      <p>Name: ${hippo.name}</p>
      <p>Age: ${hippo.age}</p>
      <p>Specie: ${hippo.specie}</p>
      <p>hasFur: ${hippo.hasFur}</p>
      <h3>fido (from dog): </h3>
      <p>Name: ${dog.name}</p>
      <p>Age: ${dog.age}</p>
      <p>Specie: ${dog.specie}</p>
      <p>hasFur: ${dog.hasFur}</p>
      <p>breed: ${dog.breed}</p>
      <p><button id="btn">Bark</button><p/>
      <p><pre><code id="rta"></code></pre></p>
      `;

    const runBtn = document.getElementById("btn");
    const rtaElement = document.getElementById("rta");

    runBtn.addEventListener("click", () => {
      try {
        const dog = new Dog("fido", 4, "pastor aleman", true);
        const rta = dog.bark();
        rtaElement.innerHTML = rta;
      } catch (error) {
        rtaElement.innerHTML = JSON.stringify(error, null, 1);
      }
    });
  } catch (err) {
    document.getElementById("app").innerHTML = `
        <p><pre><code id="rta">En cuanto soluciones el reto cargarán los datos de los animales 🔥</code></pre></p>
      `;
  }
})();
