def sum_numbers(raiz):
   if not raiz: return 0
   sumaTotal = dfs(raiz, "", 0)
   return sumaTotal

def dfs(raiz, caminoActual, sumaTotal):
   if not raiz.izquierda and not raiz.derecha:
      sumaTotal += int(caminoActual + str(raiz.valor))
   if raiz.izquierda:
      sumaTotal = dfs(raiz.izquierda, caminoActual + str(raiz.valor), sumaTotal)
   if raiz.derecha:
      sumaTotal = dfs(raiz.derecha, caminoActual + str(raiz.valor), sumaTotal)
   return sumaTotal

class Nodo:
   def __init__(self, x):
      self.valor = x
      self.izquierda = None
      self.derecha = None

nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo4 = Nodo(4)
nodo5 = Nodo(5)
nodo6 = Nodo(6)
nodo7 = Nodo(7)
nodo1.izquierda = nodo2
nodo1.derecha = nodo3
nodo2.izquierda = nodo4
nodo2.derecha = nodo5
nodo3.izquierda = nodo6
nodo3.derecha = nodo7

response = sum_numbers(nodo1)
print(response)
