export function sortByLastName(array) {
  return array.sort((a, b) => {
    const lastNameA = a.split(" ")[1];
    const lastNameB = b.split(" ")[1];
    return lastNameA.localeCompare(lastNameB);
  });
}
