class Nodo:
   def __init__(self, x):
      self.valor = x
      self.siguiente = None

def hasCycle(cabeza: Nodo) -> bool:
   # Tu código aquí 👇
   return False

nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo4 = Nodo(4)
nodo1.siguiente = nodo2
nodo2.siguiente = nodo3
nodo3.siguiente = nodo4
# nodo4.siguiente = nodo2

response = hasCycle(nodo1)
print(response)
