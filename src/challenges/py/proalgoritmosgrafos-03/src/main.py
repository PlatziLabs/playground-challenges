def minKnightMoves(origenX, origenY, objetivoX, objetivoY):
   directions = [[-1,2],[1,2],[-1,-2],[1,-2],[-2,1],[2,1],[-2,-1],[2,-1]]
   visitados = set()
   cola = [[origenX, origenY]]
   nivel = 0

   while cola:
      for _ in range(len(cola)):
         actualX, actualY = cola.pop(0)
         if (actualX, actualY) in visitados: continue
         if objetivoX == actualX and objetivoY == actualY: return nivel
         visitados.add((actualX, actualY))
         for direction in directions:
            cola.append((actualX + direction[0], actualY + direction[1]))
      nivel += 1
        
   return -1

response = minKnightMoves(0, 0, 5, 5)
print(response)
