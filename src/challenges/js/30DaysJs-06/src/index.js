import "./styles.css";
import { getStudentAverage } from "./exercise";

(() => {
  const students = [
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Juan",
      grades: [92, 81, 80, 96],
    },
  ];
  document.getElementById("app").innerHTML = `
    <h2>Obten el promedio de los estudiantes</h2>
    <div class="table">
      <div id="names">
        <h3>Nombres</h3>
      </div>
      <div id="grades">
        <h3>Notas</h3>
      </div>
    </div>
    <p><button id="btn">Run Code</button><p/>
    <div id="rta"></div>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  const names = document.getElementById("names");
  const notes = document.getElementById("grades");

  students.map((student) => {
    names.innerHTML += `<p>${student.name}</p>`;
    notes.innerHTML += `<p>${student.grades.join(" | ")}</p>`;
  });

  runBtn.addEventListener("click", () => {
    try {
      const rta = getStudentAverage(students);
      console.log(rta.students);
      rtaElement.innerHTML = `
        <p>Class average</p>
        <p>${rta.classAverage}</p>
        <div>
         ${rta.students.map((student) => `<p>${student.name}</p>`)} 
         </div>
         <div>
           ${rta.students.map((student) => `<p>${student.average}</p>`)} 
        </div>
      `;
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
