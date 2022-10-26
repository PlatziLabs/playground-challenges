En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

Input:

```js
const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
```

Output:

```js
["michi", "firulais"]
```