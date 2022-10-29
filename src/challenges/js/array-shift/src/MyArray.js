export class MyArray{
  constructor(){
    this.length = 0
    this.data = {}
  }

  unshift(item){
    if(!item){
      return this.length
    }

    if(this.length === 0){
      this.data[0] = item
      this.length++
      return this.length
    }

    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = item

    this.length++
    return this.length
  }
}