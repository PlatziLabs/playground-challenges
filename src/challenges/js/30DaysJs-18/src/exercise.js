export function hotelSystem(rooms) {
  const reservations = [];

  function searchReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      return reservations[index];
    }

    throw new Error("La reservación no existe");
  }

  function getSortReservations() {
    const copy = [...reservations];

    copy.sort((a, b) => {
      const aDate = new Date(`${a.checkIn} ${new Date().getFullYear()}`);
      const bDate = new Date(`${b.checkIn} ${new Date().getFullYear()}`);
      return aDate - bDate;
    });

    return copy;
  }

  function addReservation(reservation) {
    if (!isAvailable(reservation)) {
      throw new Error("La habitación se encuentra ocupada");
    }

    reservations.push(reservation);
    return `La reservación de ${reservation.name} fue agendada exitosamente`;
  }

  function removeReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      const removedReservation = reservations[index];
      reservations.splice(index, 1);
      return removedReservation;
    }

    throw new Error("La habitación que se busca remover no existe");
  }

  function getReservations() {
    return reservations;
  }

  function isAvailable(reservation) {
    const checkIn = reservation.checkIn;
    const checkOut = reservation.checkOut;

    for (const currentReservation of reservations) {
      const currentCheckIn = currentReservation.checkIn;
      const currentCheckOut = currentReservation.checkOut;

      if (
        (checkIn >= currentCheckIn && checkIn < currentCheckOut) ||
        (checkOut > currentCheckIn && checkOut <= currentCheckOut) ||
        (checkIn <= currentCheckIn && checkOut >= currentCheckOut)
      ) {
        if (currentReservation.roomNumber === reservation.roomNumber) {
          return false;
        }
      }
    }

    return true;
  }

  function getAvailableRooms(checkIn, checkOut) {
    const availableRooms = [];

    for (let i = 1; i <= rooms; i++) {
      const reservation = { checkIn, checkOut, roomNumber: i };

      if (isAvailable(reservation)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}
