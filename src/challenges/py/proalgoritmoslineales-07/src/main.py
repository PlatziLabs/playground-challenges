import heapq
from collections import defaultdict

def reorganizeString(text: str) -> str:
  ocurrenciasPorCaracter = defaultdict(int)

  for caracter in text:
    ocurrenciasPorCaracter[caracter] += 1
    if ocurrenciasPorCaracter[caracter] > (len(text)+1) / 2: return ""
  
  colaPrioridad = []

  for caracter, ocurrencias in ocurrenciasPorCaracter.items():
    colaPrioridad.append((-ocurrencias, caracter))

  heapq.heapify(colaPrioridad)

  stringOrdenada = []

  while 2 <= len(colaPrioridad):
    ocurrencia1, caracter1 = heapq.heappop(colaPrioridad)
    ocurrencia2, caracter2 = heapq.heappop(colaPrioridad)

    stringOrdenada.append(caracter1)
    stringOrdenada.append(caracter2)

    if ocurrencia1 + 1:
      heapq.heappush(colaPrioridad, (ocurrencia1 +1, caracter1))

    if ocurrencia2 + 1:
      heapq.heappush(colaPrioridad, (ocurrencia2 +1, caracter2))

  if colaPrioridad:
    return "".join(stringOrdenada) + colaPrioridad[0][1]
  
  return "".join(stringOrdenada)

response = reorganizeString("aacab")
print(response)

response = reorganizeString("aaab")
print(response)
