// Realizar una aplicación (conjunto de funciones) que me diga si un número es par o impar.
// Agregar validación de valores (si no es número).


//DESARROLLO DEL ALUMNO

/* let number = 100;

function eresPar(number) {
    if (number % 2 === 0) {
        return `El número ${number} es par.`;
    } else {
        return `El número ${number} es impar.`;
    }
}

if (typeof number !== 'number') {
    console.log('Número no válido.');
} else {
    console.log(eresPar(number));
} */


// DESARROLLO DEL DOCENTE

initApp();

function initApp() {
    console.log('...Inicializando APP');

    const value = 135;

    // Validación
    const isNumber = validateValue(value);

    isNumber ? calculateOddOrEven(value) : notNumber(value);
}

function validateValue(valueNumber) {
    let valueIsNumber = typeof valueNumber === 'number' ? true : false;
    return valueIsNumber;
}

function calculateOddOrEven(valueNumber) {
    valueNumber % 2 === 0 ? isEven(valueNumber) : isOdd(valueNumber);
}

function notNumber(value) {
    console.log(`El valor ${value} no es numérico`);
}

function isEven(valueIsNumber) {
    console.log(`Es par el número ${valueIsNumber}`);
}

function isOdd(valueIsNumber) {
    console.log(`Es impar el número ${valueIsNumber}`);
}
