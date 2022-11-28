export function sortByDate(array) {
  return array
    .sort((a, b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime())
    .map((item) => item.name);
}
