export function filterByTerm(array, term) {
  return array
    .filter((word) => {
      return word
        .toLowerCase()
        .includes(term.toLowerCase())
    });
}
