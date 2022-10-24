export function solution(obj) {
  // Tu código aquí 👈

  // Solution 1
  // const usersArrayOfArrays = Object.entries(obj);

  // const usersArray = usersArrayOfArrays.map(userArray => {
  //   return {
  //     id: userArray[0],
  //     name: userArray[1],
  //   };
  // })

  // return usersArray;

  // Solution 2
  const usersArray = [];

  for (const [id, name] of Object.entries(obj)) {
    usersArray.push({ id, name });
  }

  return usersArray;
}
