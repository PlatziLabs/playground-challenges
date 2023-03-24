import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.capacity -= 1;
      const reservation = new Reservation(this, passenger);

      this.passengers.push(reservation.confidentialData);
      passenger.addFlight(this);

      if (passenger.age < 18 || passenger.age > 65) {
        this.price *= 0.8;
      }

      return reservation;
    }
  }
}