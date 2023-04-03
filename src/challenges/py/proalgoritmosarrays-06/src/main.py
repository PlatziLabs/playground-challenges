from typing import List

def searchInMatrix(matriz: List[List[int]], objetivo: int) -> bool:
  return False

matriz = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60],
]
print(matriz)

response = searchInMatrix(matriz, 3)
print(response)

response2 = searchInMatrix(matriz, 12)
print(response2)
