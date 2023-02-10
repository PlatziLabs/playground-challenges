from typing import List

def searchInMatrix(matriz: List[List[int]], objetivo: int) -> bool:
  izquierda = 0
  derecha = len(matriz) - 1

  while izquierda < derecha:
    mitad = (izquierda + derecha) // 2 + 1
    if matriz[mitad][0] == objetivo:
      return True
    if matriz[mitad][0] < objetivo:
      izquierda = mitad
    else:
      derecha = mitad - 1

  fila = matriz[izquierda]
  izquierda = 0
  derecha = len(fila) - 1

  while izquierda <= derecha:
    mitad = izquierda + (derecha - izquierda) // 2
    if fila[mitad] == objetivo:
      return True
    if fila[mitad] < objetivo:
      izquierda = mitad + 1
    else:
      derecha = mitad - 1
  
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
