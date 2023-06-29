def count_letters(phrase):
  characters = {}

  for character in phrase:
    if character in characters:
      characters[character] += 1
    else:
      characters[character] = 1

  return characters

response = count_letters("Lorem ipsum dolor sit amet, consecetur adipiscing eit. Sed euismod mollis est, at dictum lectus auctor vel. Vivamus sit amet sem massa.")
print(response)