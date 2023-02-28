La función `kClosest` recibe los siguientes parámetros:

- Una matriz de puntos en la que `puntos[i] = [xi, yi]` representa un punto del plano (`[x, y]`)
- Un número entero `k`

Debes retornar los `k` puntos más cercanos al origen `[0,0]` (no importa el orden en que se retornen).

Recuerda que puedes usar la **distancia euclidiana** para calcular la distancia entre los puntos `[x,y]`.

Ejemplo 1:

```py
# Input
kClosest([[1,3], [3,4], [5,6]], 1)

# Output
[[1,3]]
```

Ejemplo 2:

```py
# Input
kClosest([[13,-8], [1,20], [-5,5]], 2)

# Output
[[13,-8], [-5,5]]
```
