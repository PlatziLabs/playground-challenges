export function* getId() {
  let lastId = 1;
  while (true) {
    yield lastId++;
  }
}