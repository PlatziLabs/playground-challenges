export class Reservation {
  constructor(flight, passenger) {
    this.flight = flight;
    this.passenger = passenger;
  }

  get confidentialData() {
    return (() => {
      const fullName = `${this.passenger.name} ${this.passenger.lastName}`;
      const age = this.passenger.age;

      return {
        fullName,
        age,
      };
    })();
  }

  reservationDetails() {
    const flight = this.flight;
    const passenger = this.confidentialData;

    return {
      origin: flight.origin,
      destination: flight.destination,
      date: flight.date,
      reservedBy: passenger.fullName,
    };
  }
}