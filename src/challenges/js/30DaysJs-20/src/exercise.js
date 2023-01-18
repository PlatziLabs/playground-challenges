export function arrayModified() {
  Array.prototype.myFilter = function (func) {
    const newArray = [];

    for (let index = 0; index < this.length; index++) {
      const element = this[index];
      if (func(element)) {
        newArray.push(element);
      }
    }

    return newArray;
  };
}
