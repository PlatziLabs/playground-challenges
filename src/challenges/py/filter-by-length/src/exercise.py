def filter_by_length(words):
   return list(filter(lambda word: len(word) >= 4, words))

response = filter_by_length(['amor', 'sol', 'piedra', 'día'])
print(response)