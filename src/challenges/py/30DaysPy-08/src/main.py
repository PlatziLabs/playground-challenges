def find_largest_palindrome(words):
  largest_palindrome = ""
  for word in words:
    reversed_word = ""
    
    for value in range(len(word), 0, -1):
      letter = word[value - 1]
      reversed_word += letter
    
    if reversed_word == word:
      if(len(word) > len(largest_palindrome)):
        largest_palindrome = word
  
  if largest_palindrome == "":
    return None
  
  return largest_palindrome

response = find_largest_palindrome(["racecar", "level", "world", "hello"])
print(response)