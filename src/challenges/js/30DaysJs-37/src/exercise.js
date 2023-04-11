import { LinkedList } from "./SinglyLinkedList";
import { Node } from "./Node";

export class LinkedListRecharged extends LinkedList {
  get(index){
    if(index < 0 || index >= this.length){
      return null
    }

    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode.value
  }

  insertAt(index, value){
    if(index < 0 || index >= this.length){
      return null
    }

    const newNode = new Node(value)
    if(index === 0){
      newNode.next = this.head 
      this.head = newNode
      if(!this.tail){
        this.tail = newNode
      }
      this.length++

      return newNode
    }
    let currentNode = this.head
    for(let i = 0; i < index - 1; i++){
      currentNode = currentNode.next
    }

    newNode.next = currentNode.next
    currentNode.next = newNode    

    if(!newNode.next){
      this.tail = newNode
    }

    this.length++
    return newNode

  }

  toArray(){
    const result = []
    let currentNode = this.head
    while(currentNode){
      result.push(currentNode.value)
      currentNode = currentNode.next
    }

    return result
  }

  removeAt(index){
    if(index < 0 || index >= this.length){
      return null
    }

    let deletedNode = null
    if(index === 0){
      deletedNode = this.head
      this.head = this.head.next
      if(this.length === 1){
        this.tail = null
      }
      this.length--
      return deletedNode.value
    }

    let currentNode = this.head

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }

    deletedNode = currentNode.next
    currentNode.next = currentNode.next.next

    if(!currentNode.next){
      this.tail = currentNode
    }

    this.length--
    return deletedNode.value
  }
}
