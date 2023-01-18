export function findLargestPalindrome(words) {
  let largest = null;
  for (const word of words) {
    const reversedWord = word.split("").reverse().join("");
    if (reversedWord === word) {
      if (largest == null || word.length > largest.length) {
        largest = word;
      }
    }
  }

  return largest;
}
