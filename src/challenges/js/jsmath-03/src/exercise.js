export function solution(obj) {
  const usersArrayOfArrays = Object.entries(obj);

  const usersArray = usersArrayOfArrays.map(userArray => {
    return {
      id: userArray[0],
      name: userArray[1],
    };
  })

  return usersArray;
}
