from functools import reduce

def count_words(text):
   def counter(total, item):
      return total + len(item.split(' '))
   return reduce(counter, text, 0)

text = [
   "Beautiful is better than ugly",
   "Explicit is better than implicit"
]
response = count_words(text)
print(response)