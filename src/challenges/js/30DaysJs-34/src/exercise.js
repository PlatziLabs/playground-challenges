export class ContactList {
  constructor(size) {
    // Tu código aquí 👈
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    // Tu código aquí 👈
  }

  get(name) {
    // Tu código aquí 👈
  }

  retrieveAll() {
    // Tu código aquí 👈
  }

  delete(name) {
    // Tu código aquí 👈
  }
}
