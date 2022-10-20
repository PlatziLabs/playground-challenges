# Playground Challenges

> El Playground: Code Runner es una herramienta que nos permite ejecutar código desde la plataforma haciendo que el estudiante ponga en práctica sus conocimientos a través de ejercicios de los cuales tiene feedback automático.


![Playground](https://i.imgur.com/gb5cL8z.png)


## Agregar ejercicios de Vanilla JS

### 1. Hacer Fork del proyecto


### 2. Crear nuevo reto a partir del template

> Antes debes verficiar el el nombre que vayas a elegir para tu proyecto no este creado

```sh
make create-js name=pascal
cd ./src/challenges/js/pascal/
npm run dev
```

### 3. Reconcer la estructura

Cuando entres al código del proyecto verás una estructura de carpetas, como la siguiente.


```sh
.
├── README.md
├── dist
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── playground.json
└── src
  ├── exercise.js
  ├── exercise.test.js
  ├── index.js
  └── styles.css
```

No debes cambiar la estructura, ya que el Playground asume que manejas este orden para leer los archivos.


### 4. Agregar descripción

Debes crear la descripción de lo que se espera que el estudiante logre en este reto, eso debe estar en el archivo `README.md` y será mostrado en la vista de “Guía” en el Playground, el archivo debe estar en formato Markdown

```md
En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input

```js
solution([2, 4, 5, 6, 8]);
```

Output

```sh
[4,8,10,12, 16]
```

![Playground](https://i.imgur.com/gb5cL8z.png)

### 5. Crear el código base

El reto debe estar dentro de la carpeta `/src`, está carpeta es importante y todos los archivos que pongas allí serán los que el estudiante verá en el Playground, pero hay unas excepciones:

- El archivo `index.js` e `index.html` estarán ocultos
- Todos los archivos que terminen en `.test.js` no serán visibles para el estudiante.

Por ejemplo, en este reto hay 5 archivos, pero el estudiante solo va a visualizar los siguientes archivos:

- exercise.js
- tasks.js



Teniendo esto en cuenta podrías crear tu repo en el archivo exercise.js el cual tendrá el código base que quieres que el estudiante vea en el playground, ejemplo:

![Playground](https://i.imgur.com/sS5wXHS.png)

### 6. Crear las pruebas del reto

Ahora puedes crear un archivo que contenga las pruebas, por ejemplo `exercise.test.js`, este archivo debes tener las pruebas usando Jest y es el cual le dará feedback automático que el estudiante requiere, ejemplo:

```js
// src/exercise.test.js

import { runCode } from './challenge';

it("should return [1,2,3,4]", () => {
  const arrayA = [1, 2];
  const arrayB = [3, 4];
  const rta = runCode(arrayA, arrayB);
  expect(rta).toEqual([1, 2, 3, 4]);
});

it("should return [1,2,3,4,5]", () => {
  const arrayA = [1, 2];
  const arrayB = [3, 4, 5];
  const rta = runCode(arrayA, arrayB);
  expect(rta).toEqual([1, 2, 3, 4, 5]);
});
```

![Playground](https://i.imgur.com/JheFk4C.png)

### 7. Personalizar el preview del reto


La previsualización le permite al estudiante ver el tiempo real una vista HTML en donde se va ejecutando el código y tú debes personalizar esta vista según lo requieras, por eso en el archivo `src/index.js`, por ejemplo, el siguiente código llama a la función runCode que se espera que el estudiante escriba y este HTML se podrá ver como vista previa.

```js
// src/index.js

import { runCode } from './exercise';

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7, 8];
const rta = runCode(arrayA, arrayB);

document.getElementById("app").innerHTML = `
<p>Array A: ${arrayA}</p>
<p>Array B: ${arrayB}</p>
<p>Rta: ${rta}</p>`;
```

### 8. Enviar PR del reto

Aquí puedes enviar el primer PR hacia la rama `master` en donde ya esta el reto sin la solución.

### 9. Crear la solución al reto


Una parte importate es mostrarle al estudiante después de 3 intentos cuál era la solución al problema en caso de que no lo logré.

Por eso la solución debe estar en una nueva rama llamada `solution` en esta rama puedes hacer todos los ajustes para dar solución al reto.

```js
// src/exercise.js en la rama solution

import { doTask1, doTask2, doTask3 } from './tasks';

// Nota que las funciones doTask1, doTask2, doTask3 cambiaron 👆🏻

export function runCode() {
  const strings = [];
  return doTask1()
  .then((rta1) => {
    strings.push(rta1);
    return doTask2();
  })
  .then((rta2) => {
    strings.push(rta2);
    return doTask3();
  })
  .then((rta3) => {
    strings.push(rta3);
    return strings;
  })
}
```


![Playground](https://i.imgur.com/4Q1SKU7.png)


### 10. Enviar PR de la solución al reto

Aquí puedes enviar el segundo PR hacia la rama `solution` en donde el reto con la solución.
