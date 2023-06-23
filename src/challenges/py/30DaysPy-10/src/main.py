def find_words_with_two_vowels(words):
   vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
   return [word for word in words if sum(1 for char in word if char in vowels) == 2]

response = find_words_with_two_vowels([
  "hello",
  "Python",
  "world",
  "platzi"
])

print(response)