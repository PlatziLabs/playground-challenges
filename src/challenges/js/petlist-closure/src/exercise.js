export function createPetList() {
  let petList = []
  return function(pet){
      if(pet){
        petList.push(pet)
        return petList
      }
      return petList
  }
}
