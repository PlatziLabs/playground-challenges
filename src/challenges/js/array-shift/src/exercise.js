import { MyArray } from "./MyArray";

export class BetterArray extends MyArray {
  constructor(){
    super()
    this.length = 0
    this.data = {}
  }

  shift(){
    if(this.length === 0){
      return undefined
    }

    const itemDeleted = this.data[0]

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    this.length--
    delete this.data[this.length]
    return itemDeleted
  }
}
