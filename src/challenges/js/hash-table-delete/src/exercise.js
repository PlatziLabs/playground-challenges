import { HashTable } from "./hashTable";

export class Solution extends HashTable {
  constructor(size) {
    super()
    this.data = new Array(size);
  }

  delete(key){
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let arrDeletedItems = currentBucket.splice(i, 1)
          return arrDeletedItems[0];
        }
      }
    }
    return undefined;
  }
}