import heapq
from typing import List

def kClosest(puntos: List[List[int]], K: int) -> List[List[int]]:
  if K == len(puntos): return puntos
  
  distancias = []
  
  for x,y in puntos:
      distancia = (x*x + y*y) ** (1/2)
      distancias.append((distancia,[x,y]))
  
  heapq.heapify(distancias)
  puntosMasCercanos = []
  
  for _ in range(K):
      distanciaActual, coordenadas = heapq.heappop(distancias) #log
      puntosMasCercanos.append(coordenadas)
  
  return puntosMasCercanos

response = kClosest([[1,3], [3,4], [5,6]], 1)
print(response)

response = kClosest([[13,-8], [1,20], [-5,5]], 2)
print(response)

