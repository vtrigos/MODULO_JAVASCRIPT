# FUNDAMENTOS DE PROGRAMACIÓN

## ¿QUÉ ES PROGRAMACIÓN?
Son conjuntos de instrucciones que se le da a una computadora para entendernos y realizar una tarea especifica para ello debemos ser muy específicos.

## ¿QUÉ ES UN LENGUAJE DE PROGRAMACIÓN?
Es un conjunto de sintaxis que necesita un compilador para traducir a código binario (0 y 1) que la computadora puede entender.

## TIPOS DE LENGUAJE DE PROGRAMACIÓN
Se dividen en:
- Compilados: Se compila todo (0 y 1) para ejecutar y son más rápidos que los interpretados (Ejm, C y C++).
- Interpretados: La computadora interpreta (0 y 1) en tiempo real línea por línea el lenguaje de programación no necesita compilador (Ejm. JavaScript).
- De Alto Nivel: Son sencillos de aprender (Ejm. Python y JavaScript).
- De Bajo Nivel: Son más complejos de aprender (Ejm. Ensamblador)

## JAVASCRIPT
Es un lenguaje de tipo interpretado osea no tan complejo de entender como un compilado y se interpretará en tiempo real.

en html se debe llamar al archivo **.js** con la etiqueta: 
```html
<string src=''><string>
```

- Esta basado en __prototipos__ (son funciones o extensiones predifinidas a las variables)
- Es __dinámicamente tipado__ (Se puede asignar valores a una variable dandole poderes asignado el tipo)
```js
Ejm: let nombreTitular : string = 'Vìctor Trigos'
```

### VARIABLES

Una variable es un espacio en la memoria ram que nos permite guardar un valor.

Tipos de nombramientode variables:
- **camelcase**, Ejm.: code**P**rincipal
- **underscore**, Ejm.: code_principal
- **pascalcase**, Ejm.: **C**ode**P**rincipal


En java script existen 3 maneras de declarar una variable:

1. **var** (Standard ES5: antiguo, daba problemas de SCOPE))
2. **let**   (Standard ES6: moderno)
3. **const**  (Standard ES6: moderno)

 __ES__ *(ECMAScript: standar de JavaScript)*
> ***Se recomienda usar ES6***  

__LET__: 
No permite redeclarar la variable sólo redifinir el valor, permite crear la variable y no definirla.

```js
Permitido: 

let paisSudamerica = 'Brasil';
paisSudamerica = 'Perú';

console.log(paisSudamerica);

let paisSudamerica;  también se puede colocar la variable sin asignar valor

Error:

let paisSudamerica = 'Colombia';
let paisSudamerica = 'Perú';

```

__CONST__:
Se puede definir como constante, siempre se debe inicializar un valor y no se puede redifinir el valor.

```js
const pi = 3.141516; 

Error:
pi = 4.58
const pi

```
### TIPOS DE DATO

Nos permiten clasificar el tipo de valor que almacenarán nuestras variables o constantes:

- String
- Number
- Booleanos
- Date  

__STRING__  
Tipo referente a caracteres y texto (txt)

1. **Declaración**: se puede asignar directamente a la variable (**let** o **const**) los valores se ponen entre comillas simples o dobles
```js
const tituloPrincipal = 'IMPRESIÓN 3D - Desafío 2024'

Usa prototipos:

console.log(tituloPrincipal.Length);
console.log(tituloPrincipal.toUpperCase());

```
En el primer ejemplo se usa una propiedad y en el segundo un método, el primero no necesita colocar parentesis **()** el otro sí.


2. **Concatenación**
Existen 2 formas de concatenación pero se sugiere trabajar con *ES6*

```js
const titModalidad = 'IMPRESIÓN';
const titTipo = '3D';

Concatenación ES5:

console.log(titModalidad + ' ' + titTipo + ' ' + '-' + ' ' + 'Desafío' + ' ' + '2024');

Concatenación ES6 (TEMPLATE STRING):

console.log(`${titModalidad} ${titTipo} - Desafío 2024`);
```