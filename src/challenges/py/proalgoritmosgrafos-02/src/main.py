def numeroDeIslas(mapa):
  def dfs(i,j):
    if 0 <= i < len(mapa) and 0 <= j < len(mapa[0]) and mapa[i][j] == '1':
      mapa[i][j] = '2'
      dfs(i-1,j)
      dfs(i+1,j)
      dfs(i,j-1)
      dfs(i,j+1)

  cantidadIslas = 0
  for i in range(len(mapa)):
    for j in range(len(mapa[0])):
      if mapa[i][j] == '1':
        dfs(i,j)
        cantidadIslas += 1
  return cantidadIslas


mapa = [
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"],
]
response = numeroDeIslas(mapa)
print(response)

mapa = [
["1","1","0","0","1"],
["1","1","1","0","1"],
["0","0","1","0","1"],
["0","0","0","0","1"],
["0","0","0","0","1"],
]
response = numeroDeIslas(mapa)
print(response)
