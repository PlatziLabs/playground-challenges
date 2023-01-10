import "./styles.css";
import { getPetExerciseInfo } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h2>¡Obten información acerca del ejercicio de tu mascota!</h2>
    <label for="pet">Tipo de mascota</label>
    <select name="pet" id="pet">
      <option value="perro">Perro</option>
      <option value="gato">Gato</option>
      <option value="ave">Ave</option>
      <option value="Mamut">Mamut</option>
    </select>
    <label for="age">Edad de tu mascota</label>
    <input id="age" placeholder="edad" type="number" name="age" min=0 >
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  const petType = document.getElementById("pet")
  const petAge = document.getElementById("age")

  runBtn.addEventListener('click', () => {
    try {
      const typeValue = petType.value
      const ageValue = petAge.value 
      const rta = getPetExerciseInfo(typeValue, ageValue);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
