En este desafío vas a recibir 4 elementos:

- 2 arrays de números enteros (`nums1` y `nums2`) ordenada de forma ascendente.

- 2 números enteros (`m` y `n`) con la cantidad de elementos de cada una de las listas anteriores (`nums1` y `nums2` respectivamente).

> Importante: la longitud de `nums1` es de `m` + `n`, siendo `m` los primeros elementos de la lista (los números que posteriormente se deben combinar) y `n` los últimos elementos (teniendo todos el valor de 0 y que deben ser ignorados en la combinación).

La función `merge_lists` debe retornar 1 único array con la combinación de `nums1` y `nums2` ordenado de forma ascendente.

Input:

```py
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
merge_lists(nums1, m, nums2, n)

nums1 = [1,2,3,0,0,0,0]
m = 3
nums2 = [-4,2,3,9]
n = 4
merge_lists(nums1, m, nums2, n)
```

Output:

```py
[1,2,2,3,5,6]

[-4,1,2,2,3,3,9]
```
