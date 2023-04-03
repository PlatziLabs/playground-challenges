import { Flight } from "./Flight";
import { EconomicFlight } from "./EconomicFlight";
import { Passenger } from "./Passenger";
import { PremiumFlight } from "./PremiumFlight";
import { Reservation } from "./Reservation";

describe("tests", () => {
  it("should sell a ticket and decrease the capacity", () => {
    const flight = new Flight("CDMX", "Guadalajara", "2023-20-03", 5, 1000);
    const passenger = new Passenger("Juan", "Perez", 30);

    flight.sellTicket(passenger);

    expect(flight.capacity).toBe(4);
  });

  it("should not sell a ticker if the capacity is 0", () => {
    const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 0, 1000);
    const passenger = new Passenger("Juan", "Perez", 30);

    const reservation = flight.sellTicket(passenger);

    expect(reservation).toBe(undefined);
  });

  it("should reserve a flight", () => {
    const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
    const passenger = new Passenger("Juan", "Perez", 30);

    const reservation = flight.sellTicket(passenger);

    expect(reservation instanceof Reservation).toBe(true);
  });

  it("should add a flight to passenger", () => {
    const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
    const passenger = new Passenger("Juan", "Perez", 30);

    const reservation = flight.sellTicket(passenger);

    expect(reservation instanceof Reservation).toBe(true);
    expect(passenger.flights).toEqual([
      {
        origin: "CDMX",
        destination: "Guadalajara",
        date: "2022-01-01",
        price: 1000,
      },
    ]);
  });

  it("should add a passenger to flight", () => {
    const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
    const passenger = new Passenger("Juan", "Perez", 30);

    const reservation = flight.sellTicket(passenger);

    expect(reservation instanceof Reservation).toBe(true);
    expect(flight.passengers).toEqual([
      {
        fullName: "Juan Perez",
        age: 30,
      },
    ]);
  });

  it("should return an object with the reservation details", () => {
    const flight = new Flight("CDMX", "Guadalajara", "2023-01-01", 5, 1000);
    const passenger = new Passenger("Juan", "Perez", 30);

    const reservation = new Reservation(flight, passenger);

    const message = reservation.reservationDetails();

    expect(message).toEqual({
      origin: "CDMX",
      destination: "Guadalajara",
      date: "2023-01-01",
      reservedBy: "Juan Perez",
    });
  });

  it("should sells a premium flight and adds the special service price", () => {
    const flight = new PremiumFlight(
      "New York",
      "Paris",
      "2023-12-25",
      100,
      200,
      50
    );
    const passenger = new Passenger("Pedro", "Gutierrez", 17);

    const reservation = flight.sellTicket(passenger);
    expect(flight.capacity).toBe(99);
    expect(reservation.flight.price).toBe(250);
  });

  it("should sells a economic flight and applies discount", () => {
    const flight = new EconomicFlight(
      "New York",
      "Paris",
      "2023-12-25",
      100,
      200
    );
    const passenger = new Passenger("Pedro", "Gutierrez", 17);
    const reservation = flight.sellTicket(passenger);
    expect(flight.capacity).toBe(99);
    expect(reservation.flight.price).toBe(160);
  });

  it("should sells a economic flight without applying discount", () => {
    const flight = new EconomicFlight(
      "New York",
      "Paris",
      "2023-12-25",
      100,
      200
    );
    const passenger = new Passenger("John", "Doe", 30);
    const reservation = flight.sellTicket(passenger);
    expect(flight.capacity).toBe(99);
    expect(reservation.flight.price).toBe(200);
  });
  it("Economic flight should extends from flight", () => {
    const rta = EconomicFlight.prototype instanceof Flight;
    expect(rta).toBe(true);
  });

  it("premium flight should extends from flight", () => {
    const rta = PremiumFlight.prototype instanceof Flight;
    expect(rta).toBe(true);
  });
});
