def count_words_by_length(words):
  return {len(word): sum(1 for w in words if len(w) == len(word)) for word in words}

response = count_words_by_length([
  "apple",
  "banana",
  "orange",
  "grapefruit",
  "pear",
  "kiwi"
])

print(response)