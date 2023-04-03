export function searchInRotatedArray(nums, objetivo) {
  let izquierda = 0;
  let derecha = nums.length - 1;
  let mitad;

  while (izquierda <= derecha) {
    mitad = Math.floor(izquierda + (derecha - izquierda) / 2);

    if (nums[mitad] == objetivo) {
      return mitad;
    }

    if (nums[mitad] >= nums[izquierda]) {
      if (objetivo >= nums[izquierda] && objetivo < nums[mitad]) {
        derecha = mitad - 1;
      } else {
        izquierda = mitad + 1;
      }
    } else {
      if (objetivo > nums[mitad] && objetivo <= nums[derecha]) {
        izquierda = mitad + 1;
      } else {
        derecha = mitad - 1;
      }
    }
  }

  return -1;
}
