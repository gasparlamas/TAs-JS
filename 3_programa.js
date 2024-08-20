
//Voy a poner las funciones que hice

function repeatString(texto,repeticiones){
    let resultado = "";
    for (let i=0; i < repeticiones; i++){
        resultado+= texto;
    }
    return resultado
}

function reverseString(texto){
    let resultado = "";
    for (let i = texto.length -1; i >= 0; i--){
        resultado+= texto[i];
    }
    return resultado;
}

function removeFromArray(arreglo,item){
    let indice = arreglo.indexOf(item);
    if (indice !==-1){
        arreglo.splice(indice,1);
    }
    return arreglo
}

function getOdds(nums){
    let resultado = [];
    for (let i= 0; i < nums.length; i++){
        if (i%2 !== 0){
            resultado.push(i);
        }
    }
    return resultado;
}

function duplicates(nums){
    let resultado = 0;
    let repetidos = [];
    for (let i= 0; i < nums.length; i++){
        if(repetidos.includes(nums[i])){
            resultado += 1
        }
        else {
            repetidos.push(nums[i]);
        }        
    }
    return resultado
}

function sumAll(a,b){
    let resultado = 0;
    if (a>= b){
        [a,b]= [b,a]
    }
    for(let i = a; i<= b; i++){
        resultado+=i;
    }
    return resultado;
}

function convertToCelsius(temp){
    let resultado = (temp-32) * (5/9);
    return resultado.toFixed(1);
}

function convertToFarenheit(temp){
    let resultado = (temp*(9/5)) + 32;
    return resultado.toFixed(1);
}

function leapYears(año){
    let resultado = false;
    if(año%4 === 0){
        if(año%100!==0 || año%400===0){
        resultado = true;
        }
    }
    return resultado;
}

function getSums(nums){
    let resultado = 0;
    for(let i=0; i<= nums.length -1; i++){
        resultado+= nums[i];
    }
    return resultado;
}

function generatePassword(length){
    if(length < 8){
        return("Contraseña no valida")
    }
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const simb = "!@#$%^&*()_+[]{}|;:',.<>?";

    let resultado = 
        mayus[Math.floor(Math.random() * mayus.length)]+
        minus[Math.floor(Math.random() * minus.length)]+
        num[Math.floor(Math.random() * num.length)]+
        simb[Math.floor(Math.random() * simb.length)];
    let caracteres = mayus+minus+num+simb;
    for(let i = resultado.length;i< length;i++){
        resultado+=caracteres[Math.floor(Math.random()*caracteres.length)];
    }
    return resultado;
}


//Instancias para que la gente ingrese los datos

//Reps cadena
let cadena = prompt("Introduci tu cadena");
let repeticiones = parseInt(prompt("Introduci la cantidad de repeticiones"));
//Invert cadena
let invertida = prompt("Introduci tu cadena para invertir");
//Eliminar elemento array
let eliminarArray = prompt("Introduci un array de numeros (separado por comas)");
let eliminarItem = prompt("Eleji el elemento a eliminar");
let array = eliminarArray.split(",");
//impares
let verImpar = prompt("Introduci un array de numeros para ver cuales son impar (separado por comas)");
let impar = verImpar.split(",");
//duplicados
let verDuplicados = prompt("Introduci un array para ver la cantidad de elementos duplicados que tiene (separado por comas)");
let duplicados = verDuplicados.split(",");
//suma rango
let sumaInicio = parseInt(prompt("Introduci desde que numero empieza tu suma"));
let sumaFin = parseInt(prompt("Introduci hasta que numero incluye tu suma"));
//temperaturas
let pasarCelsius = parseFloat(prompt("Introduci la temperatura a transformar a Celsius"));
let pasarFarenheit = parseFloat(prompt("Introduci la temperatura a transformar a Farenheit"));
//año bisiesto
let bisiesto = parseInt(prompt("Introduci un año para ver si es bisiesto"));
//suma array
let suma = (prompt("Introduci un array de numeros para sumar (separado por comas)"));
let sumaTotal = suma.split(",").map(Number);
//generar password
let contraseña = parseInt(prompt("Introduci la cantidad de caracteres de tu contraseña"));


function mostrarResultado(texto) {
    const resultadosDiv = document.getElementById("resultados");
    const nuevoResultado = document.createElement("p");
    nuevoResultado.textContent = texto;
    resultadosDiv.appendChild(nuevoResultado);
}


mostrarResultado("Tu cadena repetida " + repeticiones + " veces es: " + repeatString(cadena, repeticiones));
mostrarResultado("Tu cadena invertida es: " + reverseString(invertida));
mostrarResultado("Tu array ahora se ve así: " + removeFromArray(array, eliminarItem) + " , el elemento eliminado es: " + eliminarItem);
mostrarResultado("Los impares son: " + getOdds(impar));
mostrarResultado("La cantidad de duplicados es: " + duplicates(duplicados));
mostrarResultado("La suma del rango indicado es: " + sumAll(sumaInicio, sumaFin));
mostrarResultado("La conversión a Fahrenheit es: " + convertToCelsius(pasarCelsius));
mostrarResultado("La conversión a Celsius es: " + convertToFarenheit(pasarFarenheit));
mostrarResultado("¿El año es bisiesto? " + (leapYears(bisiesto) ? "Sí" : "No"));
mostrarResultado("La suma de los elementos del array es: " + getSums(sumaTotal));
mostrarResultado("Tu contraseña es: " + generatePassword(contraseña));

