import "./styles.css";

import { Flight } from "./Flight";
import { EconomicFlight } from "./EconomicFlight";
import { Passenger } from "./Passenger";
import { PremiumFlight } from "./PremiumFlight";
import { Reservation } from "./Reservation";

(() => {
  document.getElementById("app").innerHTML = `
  <h2>Create Passengers:</h2>
  <form id="createPassengerForm">
    <input type="text" id="name" placeholder="Name" name="name" required />
    <input type="text" id="lastName" placeholder="Last Name" name="lastName" required />
    <input type="number" id="age" placeholder="Age" name="age" required />
    <button type="submit">Create</button>
  </form>
  <h2>Create Flights:</h2>
  <form id="createFlightForm">
    <input type="text" id="origin" placeholder="Origin" required />
    <input type="text" id="destination" placeholder="Destination" required />
    <input type="date" id="date" placeholder="Date" required />
    <input type="number" id="capacity" placeholder="Capacity" required />
    <input type="number" id="price" placeholder="Price" required />
    <select id="flightType" required>
      <option value="">Select Flight Type</option>
      <option value="economic">Economic</option>
      <option value="premium">Premium</option>
    </select>
    <input type="number" id="specialService" placeholder="Special Service Price (Premium Only)" />
    <button type="submit">Create</button>
  </form>
  <h2>Reserve Ticket:</h2>
  <p>Passenger | Flight</p>
  <form id="reserveTicketForm">
    <select id="passengerList" required></select>
    <select id="flightList" required></select>
    <button type="submit">Reserve</button>
  </form>
  <h2>Passengers:</h2>
  <ul id="passengerData"></ul>
  <h2>Flights:</h2>
  <ul id="flightData"></ul>
  <p id="error"></p>
  `;

  const formCreatePassenger = document.querySelector("#createPassengerForm");
  const formCreateFlight = document.querySelector("#createFlightForm");
  const formReserveTicket = document.querySelector("#reserveTicketForm");
  const selectPassenger = document.querySelector("#passengerList");
  const selectFlight = document.querySelector("#flightList");
  const passengerDataList = document.querySelector("#passengerData");
  const flightDataList = document.querySelector("#flightData");
  const rtaError = document.getElementById("error");

  const passengers = [];
  const flights = [];

  formCreatePassenger.addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const name = formCreatePassenger.name.value;
      const lastName = formCreatePassenger.lastName.value;
      const age = formCreatePassenger.age.value;

      const passenger = new Passenger(name, lastName, age);
      passengers.push(passenger);

      selectPassenger.innerHTML += `<option value="${passengers.indexOf(
        passenger
      )}">${passenger.name} ${passenger.lastName}</option>`;

      formCreatePassenger.reset();
    } catch (error) {
      rtaError.innerHTML = JSON.stringify(error.message);
    }
  });
  formCreateFlight.addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const origin = event.target.elements.origin.value;
      const destination = event.target.elements.destination.value;
      const date = event.target.elements.date.value;
      const capacity = event.target.elements.capacity.value;
      const price = event.target.elements.price.value;

      let flight;
      if (event.target.elements.flightType.value === "economic") {
        flight = new EconomicFlight(origin, destination, date, capacity, price);
      } else {
        flight = new PremiumFlight(
          origin,
          destination,
          date,
          capacity,
          price,
          event.target.elements.specialService.value
        );
      }

      flights.push(flight);

      const option = document.createElement("option");
      option.value = flights.indexOf(flight);
      option.textContent = `${origin} - ${destination} (${date})`;

      selectFlight.appendChild(option);
      printFlight();
      event.target.reset();
    } catch (error) {
      rtaError.innerHTML = JSON.stringify(error.message);
    }
  });

  formReserveTicket.addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const passenger = passengers[selectPassenger.value];
      const flight = flights[selectFlight.value];

      const reservation = flight.sellTicket(passenger);

      if (reservation) {
        const li = document.createElement("li");
        li.textContent = JSON.stringify(reservation.reservationDetails());
        passengerDataList.appendChild(li);
        printFlight();
      }
    } catch (error) {
      rtaError.innerHTML = JSON.stringify(error.message);
    }
  });

  function printFlight() {
    flightDataList.innerHTML = "";
    for (const item of flights) {
      flightDataList.innerHTML += `<li>${JSON.stringify(item)}<li>`;
    }
  }
})();
