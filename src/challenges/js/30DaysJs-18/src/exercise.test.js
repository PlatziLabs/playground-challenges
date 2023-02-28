import { hotelSystem } from "./exercise";

describe("tests", () => {
  let hotel;

  beforeEach(() => {
    hotel = hotelSystem(10);
  });

  it("should add a new reservation", () => {
    const reservation = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    expect(typeof hotel.addReservation(reservation)).toBe("string");
    expect(hotel.getReservations()).toEqual([reservation]);
  });

  it("should return the reservation with the given id", () => {
    const reservation = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    hotel.addReservation(reservation);
    expect(hotel.searchReservation(1)).toEqual(reservation);
  });

  it("should throw an error if the reservation does not exist", () => {
    expect(() => hotel.searchReservation(1)).toThrow();
  });

  it("should return an array of sorted reservations", () => {
    const reservation1 = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    const reservation2 = {
      id: 2,
      name: "Jane Doe",
      checkIn: "03/01",
      checkOut: "04/01",
      roomNumber: 2,
    };
    hotel.addReservation(reservation2);
    hotel.addReservation(reservation1);
    expect(hotel.getSortReservations()).toEqual([reservation1, reservation2]);
  });

  it("should throw an error if the room is not available", () => {
    const reservation1 = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    const reservation2 = {
      id: 2,
      name: "Jane Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    hotel.addReservation(reservation1);
    expect(() => hotel.addReservation(reservation2)).toThrow();
  });

  it("should remove the reservation with the given id", () => {
    const reservation = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    hotel.addReservation(reservation);
    expect(hotel.removeReservation(1)).toEqual(reservation);
    expect(hotel.getReservations()).toEqual([]);
  });

  it("should throw an error if the reservation does not exist", () => {
    expect(() => hotel.removeReservation(1)).toThrow();
  });

  it("should return all rooms if there are no reservations", () => {
    expect(hotel.getAvailableRooms("01/01", "01/02")).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("should return only available rooms", () => {
    hotel.addReservation({
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "01/01",
      roomNumber: 1,
    });
    hotel.addReservation({
      id: 2,
      name: "Jane Doe",
      checkIn: "01/01",
      checkOut: "03/01",
      roomNumber: 2,
    });
    expect(hotel.getAvailableRooms("01/01", "03/01")).toEqual([
      3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
