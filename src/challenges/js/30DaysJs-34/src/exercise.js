export class ContactList {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    const index = this.hash(name);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([name, phone]);
  }

  get(name) {
    const index = this.hash(name);
    if (!this.buckets[index]) {
      return null;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === name) {
        return this.buckets[index][i][1];
      }
    }
    return null;
  }

  retrieveAll() {
    const allValues = [];
    for (let i = 0; i < this.numBuckets; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          allValues.push(this.buckets[i][j]);
        }
      }
    }
    return allValues;
  }

  delete(name) {
    const index = this.hash(name);

    if (!this.buckets[index]) {
      return null;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === name) {
        this.buckets[index].splice(i, 1);
        return;
      }
    }
}
