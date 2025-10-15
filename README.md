# :flushed: Cambiemos el color de fondo con JS

## I Parte

Esta página tiene un color de fondo rojo y un texto que indica dicho color. El objetivo es cambiar el fondo al color "darkblue" y que el texto cambie al nombre del mismo color al dar click en el botón "click me".

1. Existe 1 archivo index.html que es la estructura, podrás modificar ingresando los id's que necesites (Busca en los tests para tener una idea de lo que necesitarás).
2. Dentro de la carpeta src/css tenemos el archivo style.css con unos estilos ya definidos, no modifiques este código.
3. Dentro de la carpeta src/partOne/js tenemos 2 archivos, en partOne.js realizaremos el código necesario para cambiar el color de fondo y el texto a "darkblue" y en events.js crearás el evento para ejecutar la función en el botón "click me".
4. En la carpeta tests hay un archivo partOne.test.js que va a testear tus funciones de esta primera parte. No modifiques este archivo.
5. Para mirar si está correctamente resuelto el ejercicio ejecuta en la terminal el comando "npm test" y mira que te devuelve.

### Importante
No pases a la segunda parte si no tienes resuelta la primera.

## II Parte

¿Has realizado la primera parte?
¡Felicidades!
Ahora refactoriza tu código para que cuando hagas click cambie el color y el texto a "darkblue" y al hacer click de nuevo cambien a "red".

1. Vamos a refactorizar las funciones basándonos en la parte I, sin modificar los archivos anteriores. Dentro de la carpeta src/partTwo/js tenemos 2 archivos, en partTwo.js realizaremos el código necesario para cambiar el color de fondo y el texto a "darkblue" si el color es "red" pero si el color es "darkblue" deberá cambiar a "red" y en events.js crearás el evento para ejecutar la función en el botón "click me".
2. En la carpeta tests hay un archivo partTwo.test.js que va a testear tus funciones de esta segunda parte. No modifiques este archivo.
3. Para mirar si está correctamente resuelto el ejercicio ejecuta en la terminal el comando npm test y mira que te devuelve.

## Instalación Tests

Para poder ejecutar los test has de tener instalado [Node.js](https://nodejs.org/es/). Versión LTS.

Puedes comprobar que lo tienes instalado con el comando:

```
node -v
```

Una vez instalado Node.js, has de instalar las dependencias del proyecto (en la carpeta donde tienes todos los documentos del proyecto clonado) con el comando:

```
npm install
```
O 
```
npm i
```

## Ejecución de los test

Para ejecutar los test has de ejecutar el comando:

```
npm test
```

## ¿Qué aprenderemos?

- Hacer funciones
- Disparar eventos
- Manipular el DOM
- Uso de condicionales