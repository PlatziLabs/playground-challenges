import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.capacity -= 1;
      const reservation = new Reservation(this, passenger);

      this.passengers.push(reservation.confidentialData);
      passenger.addFlight(this);

      return reservation;
    }
  }
}