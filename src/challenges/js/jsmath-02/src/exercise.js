export function solution(users, id) {
  // Tu código aquí 👈

  const userWithID = users.find(user => user.id == id);

  if (userWithID) {
    return userWithID.name;
  } else {
    return false;
  }
}
