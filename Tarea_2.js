
function mostrarResultado(texto) {
    const resultadosDiv = document.getElementById("resultados");
    const nuevoResultado = document.createElement("p");
    nuevoResultado.textContent = texto;
    resultadosDiv.appendChild(nuevoResultado);
}

/////////// PARTE 1/////////////

function sumAll(a, b) {
    let resultado = 0;
    if (a >= b) {
        [a, b] = [b, a];
    }
    for (let i = a; i <= b; i++) {
        resultado += i;
    }
    return resultado;
}

//resultados
let a = parseInt(prompt("Introduci el valor inicial de tu rango de suma:"));
let b = parseInt(prompt("Introduci el valor final de tu rango:"));
mostrarResultado("La suma entre tus valores seleccionados es: " + sumAll(a, b));

/////////// PARTE 2/////////////

function convertToCelsius(temp) {
    let resultado = (temp - 32) * (5 / 9);
    return "La conversión a Celsius es: " + resultado.toFixed(1);
}

function convertToFarenheit(temp) {
    let resultado = (temp * (9 / 5)) + 32;
    return "La conversión a Fahrenheit es: " + resultado.toFixed(1);
}

//resultados
let tempF = parseFloat(prompt("Introduci la temperatura a transformar a Fahrenheit:"));
let tempC = parseFloat(prompt("Introduci la temperatura a transformar a Celsius:"));
mostrarResultado(convertToCelsius(tempF));
mostrarResultado(convertToFarenheit(tempC));

/////////// PARTE 3/////////////

function leapYears(año) {
    let resultado = false;
    if (año % 4 === 0) {
        if (año % 100 !== 0 || año % 400 === 0) {
            resultado = true;
        }
    }
    return resultado;
}

//resultados
let año = parseInt(prompt("Introduci un año para verificar si es bisiesto:"));
mostrarResultado("¿El año es bisiesto? " + (leapYears(año) ? "Sí" : "No"));

/////////// PARTE 4/////////////

function getSums(nums) {
    let resultado = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        resultado += nums[i];
    }
    return resultado;
}

//resultados
let nums = prompt("Introduci un array de números para sumarlos (separado por comas):").split(",").map(Number);
mostrarResultado("La suma de los elementos del array es: " + getSums(nums));

