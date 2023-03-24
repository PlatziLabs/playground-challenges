import "./styles.css";
import { hotelSystem } from "./exercise";

(() => {
  document.getElementById("app").innerHTML = `
    <h3>Reservaciones actuales</h3>
    <ul id="reservations-list">
    </ul>
    <h3>Agregar reservación</h3>
    <form id="add-reservation-form">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" required>
      </div>
      <div>
        <label for="room-number">Número de habitación:</label>
        <input type="number" id="room-number" min=1 max=10 required>
      </div>
      <div>
        <label for="check-in">Fecha de llegada:</label>
        <input type="date" id="check-in" required>
      </div>
      <div>
        <label for="check-out">Fecha de salida:</label>
        <input type="date" id="check-out" required>
      </div>
      <button type="submit">Agregar reservación</button>
    </form>
    <h3>Eliminar reservación</h3>
    <form id="remove-reservation-form">
      <div>
        <label for="reservation-id">ID de reservación:</label>
        <input type="number" id="reservation-id" required>
      </div>
      <button type="submit">Eliminar reservación</button>
    </form>
    <h3>Habitaciones disponibles</h3>
    <form id="available-rooms-form">
      <div>
        <label for="available-rooms-check-in">Fecha de llegada:</label>
        <input type="date" id="available-rooms-check-in" required>
      </div>
      <div>
        <label for="available-rooms-check-out">Fecha de salida:</label>
        <input type="date" id="available-rooms-check-out" required>
      </div>
      <button type="submit">Mostrar habitaciones disponibles</button>
    </form>
    <div id="available-rooms-result"></div>
    <p id="rta"></p>
  `;

  const rtaElement = document.getElementById("rta");
  let reservations = 0;

  const hotel = hotelSystem(10);
  const addReservationForm = document.getElementById("add-reservation-form");
  const removeReservationForm = document.getElementById(
    "remove-reservation-form"
  );
  const availableRoomsForm = document.getElementById("available-rooms-form");
  const reservationsList = document.getElementById("reservations-list");
  const availableRoomsResult = document.getElementById(
    "available-rooms-result"
  );

  addReservationForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const roomNumber = parseInt(document.getElementById("room-number").value);
      let checkIn = document.getElementById("check-in").value.split("-");
      let checkOut = document.getElementById("check-out").value.split("-");
      checkIn = `${checkIn[1]}/${checkIn[2]}`;
      checkOut = `${checkOut[1]}/${checkOut[2]}`;
      hotel.addReservation({
        name,
        roomNumber,
        checkIn,
        checkOut,
        id: reservations,
      });
      reservations += 1;
      updateReservationsList();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  });

  removeReservationForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      const reservationId = parseInt(
        document.getElementById("reservation-id").value
      );

      hotel.removeReservation(reservationId);
      updateReservationsList();
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  });

  availableRoomsForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      let checkIn = document.getElementById("check-in").value.split("-");
      let checkOut = document.getElementById("check-out").value.split("-");
      checkIn = `${checkIn[1]}/${checkIn[2]}`;
      checkOut = `${checkOut[1]}/${checkOut[2]}`;
      const availableRooms = hotel.getAvailableRooms(checkIn, checkOut);
      updateAvailableRoomsResult(availableRooms);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  });

  function updateReservationsList() {
    try {
      reservationsList.innerHTML = "";

      const reservations = hotel.getReservations();
      reservations.forEach(function (reservation) {
        const li = document.createElement("li");
        li.innerHTML = `${reservation.id}: ${reservation.name} - Habitación ${reservation.roomNumber} (${reservation.checkIn} a ${reservation.checkOut})`;
        reservationsList.appendChild(li);
      });
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  }

  function updateAvailableRoomsResult(availableRooms) {
    try {
      availableRoomsResult.innerHTML = `Habitaciones disponibles: ${availableRooms.join(
        ", "
      )}`;
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error.message);
    }
  }
})();
