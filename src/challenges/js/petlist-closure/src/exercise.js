export function createPetList() {
  const petList = []
  return function(pet){
      if(pet){
        petList.push(pet)
        return petList
      }
      return petList
  }
}
