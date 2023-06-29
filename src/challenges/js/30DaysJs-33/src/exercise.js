export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];
      newArr.push(func(element));
    }

    return newArr;
  }

  filter(func) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];
      if (func(element)) {
        newArr.push(element);
      }
    }

    return newArr;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    this.length--;
    const deletedItem = this.data[this.length];

    delete this.data[this.length];

    return deletedItem;
  }

  join(character = ",") {
    let string = this.data[0];

    for (let i = 1; i < this.length; i++) {
      const element = this.data[i];

      string = `${string}${character}${element}`;
    }

    return string;
  }

  shift() {
    const deletedItem = this.data[0];

    delete this.data[0];

    this.length--;
    for (let i = 0; i < this.length; i++) {
      const nextElement = this.data[i + 1];
      this.data[i] = nextElement;
    }

    delete this.data[this.length];

    return deletedItem;
  }

  unshift(item) {
    if (!item && item !== 0) {
      return this.length;
    }

    if (this.length === 0) {
      this.data[0] = item;
      this.length++;
      return this.length;
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;

    this.length++;
    return this.length;
  }
}
