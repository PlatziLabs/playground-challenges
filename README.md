# Platzi Challenges

Monorepo para gestionar los retos que salen en el Coding Playground.

# ¿Qué es el Coding Playground?

**Coding Playground** es una herramienta que nos permite ejecutar código desde la plataforma haciendo que el estudiante ponga en práctica sus conocimientos a través de ejercicios de los cuales tiene feedback automático.

![Playground](https://i.imgur.com/XFLH7NJ.png)

Una de las características más importantes es el feedback automático, es decir que el estudiante tenga las herramientas para saber si su solución es incorrecta o correcta de forma instantánea, para eso el **Coding Playground** válida la respuesta por medio de pruebas unitarias.

# ¿Como agregar ejercicios?
- [Agregar ejercicios de Vanilla JS](#agregar-ejercicios-de-vanilla-js)
- [Agregar ejercicios de Python](#agregar-ejercicios-de-python)
- [Agregar ejercicios de SQL](#agregar-ejercicios-de-sql)

## Agregar ejercicios de Vanilla JS

### 1. Hacer Fork del proyecto


### 2. Crear nuevo reto a partir del template

Primero debes verificar el nombre que vayas a elegir para tu proyecto, no este creado.

```sh
make create-js name=pascal
cd ./src/challenges/js/pascal/
npm run dev
```

### 3. Reconcer la estructura

Cuando crees el proyecto encontrarás una estructura de carpetas como la siguiente:

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

No debes cambiar la estructura, ya que el **Coding Playground** asume que manejas este orden para leer los archivos.

### 4. Agregar descripción

La descripción se pone en el archivo `README.md` y es lo que aparece en el Tab: Guiá.

![Playground](https://i.imgur.com/cEbsRQM.png)

Aquí tienes un ejemplo en donde se usa Markdown para poner el formato.

````md
En este desafío tienes un array de **números**, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input

```js
multiplyElements([2, 4, 5, 6, 8]);
```

Output

```js
[4,8,10,12, 16]
```
````

### 5. Crear el código base

El reto debe estar dentro de la carpeta `/src`, está carpeta es importante y todos los archivos que pongas allí serán los que el estudiante verá en el Coding Playground, pero hay unas excepciones:

- El archivo `index.js` e `index.html` estarán ocultos para el estudiante.
- Todos los archivos que terminen en `.test.js` no serán visibles para el estudiante.

Teniendo esto en cuenta podrías crear tu reto en el archivo `exercise.js` el cual tendrá el código base que quieres que el estudiante vea en el Coding Playground, ejemplo:

```js
// src/exercise.js
export function multiplyElements(array) {
  // Tu código aquí 👈
}
```

![Playground](https://i.imgur.com/WU480V4.png)

### 6. Crear las pruebas del reto

Ahora puedes crear un archivo que contenga las pruebas, por ejemplo `exercise.test.js`, este archivo debes tener las pruebas usando Jest y es el cual le dará feedback automático que el estudiante requiere, ejemplo:

```js
// src/exercise.test.js
import { multiplyElements } from "./exercise";

describe("tests", () => {
  it("should return [2,4,6]", () => {
    const array = [1, 2, 3];
    const rta = multiplyElements(array);
    expect(rta).toEqual([2, 4, 6]);
  });

  it("should return [0, 1, 4]", () => {
    const array = [0, -1, 2];
    const rta = multiplyElements(array);
    expect(rta).toEqual([0, -2, 4]);
  });
  it("should return []", () => {
    const array = [];
    const rta = multiplyElements(array);
    expect(rta).toEqual([]);
  });

});
```

![Playground](https://i.imgur.com/kndkPGk.png)

### 7. Personalizar el preview del reto

La previsualización le permite al estudiante ver el tiempo real una vista HTML en donde se va ejecutando el código y tú debes personalizar esta vista según lo requieras, por eso en el archivo `src/index.js`, por ejemplo, el siguiente código llama a la función `multiplyElements` que se espera que el estudiante escriba y este HTML se podrá ver como vista previa.

```js
// src/index.js
import "./styles.css";
import { multiplyElements } from "./exercise";

(() => {
  const array = [1, 2, 3, 4];

  document.getElementById("app").innerHTML = `
    <h1>Multiplicar elementos</h1>
    <p>Array de prueba <code>${JSON.stringify(array)}</code></p>
    <p>
      <button id="btn">Run Code</button>
    </p>
    <p>Response from <code>runCode</code></p>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const btnElement = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  btnElement.addEventListener("click", () => {
    try {
      rtaElement.innerHTML = multiplyElements(array);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });

})();
```

![Playground](https://i.imgur.com/pFRSxRq.png)


### 8. Elige el título de tu reto

Llega el momento de elegir el nombre y esto está en el archivo `playground.json` en el atributo de `title`.

```json
{
  "title": "", // 👈
  "showFiles": false,
  "template": "vanilla-js"
}
```

### 9. Enviar PR del reto

Aquí puedes enviar el primer PR hacia la rama `master` en donde ya está el reto sin la solución.

### 10. Crear la solución al reto

Una parte impórtate es mostrarle al estudiante la solución al reto después de 3 intentos en caso de que no lo logré.

Por eso la solución debe estar en una nueva rama llamada `solution` en esta rama puedes hacer todos los ajustes para dar solución al reto, ejemplo:

```js
// src/exercise.js en la rama solution

export function multiplyElements(array) {
  return array.map(item => item * 2);
}

```

![Playground](https://i.imgur.com/XFLH7NJ.png)


### 11. Enviar PR de la solución al reto

## Agregar ejercicios de Python

### 1. Hacer Fork del proyecto

### 2. Crear nuevo reto a partir del template

Primero debes verificar el nombre que vayas a elegir para tu proyecto, no este creado.

```sh
make create-py name=pascal
cd ./src/challenges/py/pascal/
python3 -m venv env
source env/bin/activate
pip3 install -r requirements.txt
```

Nota: Recuerda cada vez que cambies de ejercicio desactivar en pyenv

```sh
deactivate
```

### 3. Reconcer la estructura

Cuando crees el proyecto, el código del reto que verás una estructura de carpetas, como la siguiente.

```sh
.
├── README.md
├── env
├── playground.json
├── requirements.txt
└── src
  ├── __pycache__
  ├── exercise.py
  ├── exercise_test.py
  └── tests.py
```

No debes cambiar la estructura, ya que el **Coding Playground** asume que manejas este orden para leer los archivos.

### 4. Agregar descripción

La descripción se pone en el archivo `README.md` y es lo que aparece en el Tab: Guiá.

![Playground](https://i.imgur.com/49dRrD3.png)

Aquí tienes un ejemplo en donde se usa Markdown para poner el formato.

````md
En este desafío tendrás la función `multiply_numbers` la cual recibe una lista de números, usando la función **map** y una **lambda** debes retornar todos los números de la lista multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input

```py
multiply_numbers([2,4,5,6,8])
```

Output

```py
[4,8,10,12, 16]
```
````

### 5. Crear el código base

El reto debe estar dentro de la carpeta `/src`, está carpeta es importante y todos los archivos que pongas allí serán los que el estudiante verá en el Coding Playground, pero hay unas excepciones:

- El archivo `src/tests.py` estarán ocultos para el estudiante.
- Todos los archivos que terminen en `_test.py` no serán visibles para el estudiante.

Teniendo esto en cuenta podrías crear tu reto en el archivo `exercise.js` el cual tendrá el código base que quieres que el estudiante vea en el Coding Playground, ejemplo:

```py
// src/exercise.py
def multiply_numbers(numbers):
    # Tu código aquí 👈
    return []

response = multiply_numbers([1, 2, 3, 4])
print(response)
```

### 6. Crear las pruebas del reto

Ahora puedes crear un archivo que contenga las pruebas, por ejemplo `exercise_test.py`, este archivo debes tener las pruebas usando PyTest y es el cual le dará feedback automático que el estudiante requiere, ejemplo:

```py
// src/exercise_test.py
from exercise import multiply_numbers

def test_numbers():
    tests_list = [1, 2, 3]
    rta = multiply_numbers(tests_list)
    assert rta == [2, 4, 6]

def test_negative_numbers():
    tests_list = [0, -1, 2]
    rta = multiply_numbers(tests_list)
    assert rta == [0, -2, 4]

def test_empty_list():
    tests_list = []
    rta = multiply_numbers(tests_list)
    assert rta == []
```

![Playground](https://i.imgur.com/c4iLuKy.png)

### 7. Elige el título de tu reto

Llega el momento de elegir el nombre y esto está en el archivo `playground.json` en el atributo de `title`.

```json
{
  "title": "", // 👈
  "showFiles": false,
  "template": "python"
}
```

### 9. Enviar PR del reto

Aquí puedes enviar el primer PR hacia la rama `master` en donde ya está el reto sin la solución.

### 10. Crear la solución al reto

Una parte impórtate es mostrarle al estudiante la solución al reto después de 3 intentos en caso de que no lo logré.

Por eso la solución debe estar en una nueva rama llamada `solution` en esta rama puedes hacer todos los ajustes para dar solución al reto, ejemplo:

```py
// src/exercise.py en la rama solution

def multiply_numbers(numbers):
    return list(map(lambda x: x * 2, numbers))

response = multiply_numbers([1, 2, 3, 4])
print(response)
```

![Playground](https://i.imgur.com/2LuOZWF.png)

### 11. Enviar PR de la solución al reto

## Agregar ejercicios de SQL

### 1. Hacer Fork del proyecto

### 2. Crear nuevo reto a partir del template

Primero debes verificar el nombre que vayas a elegir para tu proyecto, no este creado.

```sh
make create-sql name=pascal
cd ./src/challenges/sql/pascal/
python3 -m venv env
source env/bin/activate
pip3 install -r requirements.txt
```

Nota: Recuerda cada vez que cambies de ejercicio desactivar en pyenv

```sh
deactivate
```

### 3. Reconcer la estructura

Cuando crees el proyecto, el código del reto que verás una estructura de carpetas, como la siguiente.

```sh
.
├── README.md
├── env
├── playground.json
├── requirements.txt
└── src
  ├── __pycache__
  ├── exercise.sql
  ├── main_test.py
  ├── setup.sql
  ├── tests.py
  └── utils.py
```

No debes cambiar la estructura, ya que el **Coding Playground** asume que manejas este orden para leer los archivos.

### 4. Agregar descripción

La descripción se agrega en el archivo `README.md` y es lo que aparece en el Tab: Guía.

![SQL Playground Guide](https://static.platzi.com/media/user_upload/C362903A-D904-44EA-9365-E6FA6ACF3A11-f71589e3-ae80-47eb-b691-968c6f0d6be5.jpg)

Aquí tienes un ejemplo en donde se usa Markdown para el formato.

````md
En este desafío debes escribir el código SQL necesario para:

- Imprimir los IDs de los usuarios con ID menor o igual a 2 en la tabla `users`.

- Agregar un nuevo usuario a la tabla `users`, su `name` debe ser `Nath` y su `id` igual al ID `4`.

Ejemplo de código SQL para el README que solo imprime 1 valor:

```sql
-- Input
SELECT name FROM users WHERE id=1;

-- Output
-- Fernando
```

Ejemplo de código SQL para el README que imprime variso valores:

```sql
-- Input
SELECT * FROM users;

-- Output
-- | ID |   NAME   |
-- | -- | -------- |
-- |  1 | Fernando |
-- |  2 | David    |
-- |  3 | Luisa    |
```
````

### 5. Crear el código base

El reto debe estar dentro de la carpeta `/src` en los archivos `exercise.sql`, `setup.sql` y `main_test.py`.

- `src/exercise.sql`: es el único archivo visible y editable por estudiantes con código SQL para ejecutar y testear con el playground, puede empezar vacío o con algún contenido según lo requiera tu desafío.

- `src/setup.sql`: es opcional, no es editable ni visible por estudiantes, se ejecuta antes de `src/exercise.sql`, así que puedes usarlo para guardar información base que requieran estudiantes para resolver el reto.

- `src/main_test.py`: es obligatorio, no es visible ni editable por estudiantes, debes escribir pruebas en Python para garantizar que el código de `src/exercise.sql` soluciona el desafío.

Los demás archivos de la carpeta `src` NO los debes modificar.

> :bulb: Importante: Para ejecutar tus pruebas en local debes ejecutar el archivo tests.js ubicándote en tu terminal desde la carpeta src dentro de tu reto (es decir, ejecutas con el comando `python3 tests.py`). Si ejecutas el archivo desde otra carpeta (por ejemplo, con el comando `python3 src/tests.py`), las pruebas fallarán.


### 6. Crear las pruebas del reto

Para tus tests en el archivo `src/main_test.py` puedes escribir 2 tipos de pruebas:

- **Pruebas de output**: si tu ejercicio requiere leer contenido con un SELECT, puedes usar la variable `output` para leer el log de impresiones de `src/exercise.sql`.
- **Pruebas de query**: si tu ejercicio requiere agregar, editar o eliminar contenido, puedes ejecutar nuevas sentencias SQL para validar si el contenido de `src/exercise.sql` se modificó correctamente.

> :bulb: Importante: Tanto la lectura de outputs como la ejecución de queries devuelve tuplas y tuplas de tuplas. Dependiendo del ejercicio puedes recibir tanto con nombres de columnas como valores de cada fila de una columna.

```py
# src/main_test.py
from importlib import reload, import_module
import sqlite3
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_select_all_outputs():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  outputs = utils.run_sql(connection) # ejemplo de run_sql leyendo los outputs
  query1 = outputs[0]

  assert query1[0][0] == 1
  assert query1[1][0] == 2
  assert query1[2][0] == 3
  assert query1[3][0] == 4
  assert len(query1) == 4

def test_insert_id():
  connection = sqlite3.connect(":memory:")
  utils = reload_module("utils")
  utils.run_sql(connection) # ejemplo de run_sql sin leer outputs

  cursor = connection.cursor()
  query = "SELECT * FROM persons WHERE id = 4"
  rta = cursor.execute(query).fetchall()

  assert len(rta) == 1
  assert rta[0][0] == 4
```

![SQL PLayground Tests](https://static.platzi.com/media/user_upload/7FDB66F3-B2AE-47F4-BC7E-FDBD95581BDA-c6ba8310-5a00-47a4-9ca7-b3f6c85592d9.jpg)

### 7. Elige el título de tu reto

Llega el momento de elegir el nombre y esto está en el archivo `playground.json` en el atributo de `title`.

```json
{
  "title": "", // 👈
  "showFiles": false,
  "template": "sql"
}
```

### 9. Enviar PR del reto

Aquí puedes enviar el primer PR hacia la rama `master` en donde ya está el reto sin la solución.

### 10. Crear la solución al reto

Una parte impórtate es mostrarle al estudiante la solución al reto después de 3 intentos en caso de que no lo logré.

Por eso la solución debe estar en una nueva rama llamada `solution` en esta rama puedes hacer todos los ajustes para dar solución al reto, ejemplo:

```sql
-- src/exercise.sql en la rama solution
SELECT id FROM users WHERE id <= 2;
INSERT INTO users (id, name) VALUES (4, "Nath");
```

![SQL Playground Solution](https://static.platzi.com/media/user_upload/BD229C3F-078C-4556-B1B8-848ED2E888AC-853bba7b-aad6-494a-8fc5-d695e51460fb.jpg)

### 11. Enviar PR de la solución al reto
