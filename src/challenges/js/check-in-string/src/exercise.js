export function checkInString(text, term) {
  return text
    .toLowerCase()
    .includes(term.toLowerCase());
}
