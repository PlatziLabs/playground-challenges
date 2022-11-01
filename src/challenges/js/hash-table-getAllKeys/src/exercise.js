import { HashTable } from "./hashTable.js"

export class Solution extends HashTable {
  constructor(size){
    super()
    this.data = new Array(size)
  }


  getAllKeys(){
    let keys = []
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i]
      if(element){
        if(element.length > 1){
          for (let j = 0; j < element.length; j++) {
            const item = element[j];
            keys = [...keys, item[0]]
          }
        }else{
          keys = [...keys, element[0][0]]
        }
      }
    }

    return keys
  }
}
