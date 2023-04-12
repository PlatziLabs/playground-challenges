import "./styles.css";
import { PatientList } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
  <h3>Pacientes</h3>
  <p><code id="error"></code></p>
	<table>
		<thead>
			<tr>
				<th>Nombre</th>
				<th>Edad</th>
				<th>Número de cama</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
  <h3>Agregar paciente</h3>
	<form id="addForm" >
		<label for="name">Nombre:</label>
    <p></p>
		<input type="text" id="name" name="name"><br>

		<label for="age">Edad:</label>
    <p></p>
		<input type="number" id="age" name="age"><br>

		<button type="submit">Agregar paciente</button>
	</form>
  <h3>Eliminar paciente</h3>
	<form id="delForm" >
		<label for="nombreEliminar">Nombre:</label>
    <p></p>
		<input type="text" id="nombreEliminar" name="nombreEliminar"><br>
    <p></p>
		<button type="submit">Eliminar paciente</button>
	</form>
  <h3>Totales</h3>
	<button id="totalBedsBtn">Total de camas disponibles</button>
  <p><code id="totalBeds"></code></p>
	<button id="totalPatientsBtn">Mostrar pacientes</button>
  <p><code id="totalPatients"></code></p>
  `;

  let patientList;
  const error = document.querySelector("#error");
  const tbody = document.querySelector("tbody");
  const delForm = document.querySelector("#delForm");
  const addForm = document.querySelector("#addForm");
  const totalBedsBtn = document.querySelector("#totalBedsBtn");
  const totalBeds = document.querySelector("#totalBeds");
  const totalPatientsBtn = document.querySelector("#totalPatientsBtn");
  const totalPatients = document.querySelector("#totalPatients");

  try {
    patientList = new PatientList(3);
    patientList.addPatient("Juan", 40);
    patientList.addPatient("Pedro", 30);
    patientList.addPatient("Maria", 25);
    reloadTable(patientList);
  } catch (err) {
    console.log(err);
    error.textContent = err.message;
  }

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const name = e.target.name.value;
      const age = Number(e.target.age.value);

      patientList.addPatient(name, age);
      reloadTable(patientList);
    } catch (err) {
      error.textContent = err.message;
    }
  });

  delForm.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const patient = e.target.nombreEliminar.value;
      patientList.removePatient(patient);
      reloadTable(patientList);
    } catch (err) {
      error.textContent = err.message;
    }
  });

  totalBedsBtn.addEventListener("click", () => {
    try {
      totalBeds.textContent = patientList.getAvailableBeds();
    } catch (err) {
      error.textContent = err.message;
    }
  });

  totalPatientsBtn.addEventListener("click", () => {
    try {
      totalPatients.innerHTML = JSON.stringify(patientList.getPatientList());
    } catch (err) {
      error.textContent = err.message;
    }
  });

  function reloadTable(list) {
    const currentPatients = list.getPatientList();
    tbody.innerHTML = "";
    currentPatients.forEach((patient) => {
      tbody.innerHTML += `
      <tr>
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.bedNumber}</td>
      </tr> 
      `;
    });
  }
})();
