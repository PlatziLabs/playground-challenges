La función `countNumbers` acepta dos parámetros: un número hasta el cual debe contar y una función `callback` que se ejecuta con cada valor del contador. El objetivo es implementar la lógica necesaria para que la función envíe el valor actual del contador al callback cada segundo utilizando setInterval.

Para hacer uso de `setInterval` o `setTimeout` debes ejecutarle mediante el namespace de `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

```js
window.setInterval(() => {
  // code
});
```

La función terminada deberá retornar unos resultados como los siguiente.

Ejemplo 1:

```txt
Input:

function showSeconds(seconds){
  console.log(`Han pasado ${seconds} segundos`)
}

countNumbers(3, showSeconds)

Output:

"Han pasado 1 segundos"
"Han pasado 2 segundos"
"Han pasado 3 segundos"
// Debe ejecutarse con 1 segundo de diferencia cada uno
```

Ejemplo 2:

```txt
Input:

function showEvenNumbers(seconds){
  if(seconds % 2 === 0){
    console.log(seconds)
  }
}

countNumbers(10, showEvenNumbers)

Output:

"2"
"4"
"6"
"8"
"10"
// Debe ejecutarse con 2 segundos de diferencia cada uno

```
