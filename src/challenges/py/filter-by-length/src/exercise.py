def filter_by_length(words):
   return list(filter(lambda word: len(word) >= 4, words))

words = ['amor', 'sol', 'piedra', 'día']
response = filter_by_length(words)
print(response)