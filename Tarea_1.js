
function mostrarResultado(texto) {
    const resultadosDiv = document.getElementById("resultados");
    const nuevoResultado = document.createElement("p");
    nuevoResultado.textContent = texto;
    resultadosDiv.appendChild(nuevoResultado);
}

/////////// PARTE 1/////////////

function repeatString(texto, repeticiones) {
    let resultado = "";
    for (let i = 0; i < repeticiones; i++) {
        resultado += texto;
    }
    return resultado;
}

function reverseString(texto) {
    let resultado = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }
    return resultado;
}

//resultados
let cadena = prompt("Introduci tu cadena:");
let repeticiones = parseInt(prompt("Introduci la cantidad de repeticiones:"));
let cadenaInvertida =  prompt("Introduci tu cadena para invertir:");
mostrarResultado("Tu cadena repetida " + repeticiones + " veces es: " + repeatString(cadena, repeticiones));
mostrarResultado("Tu cadena invertida es: " + reverseString(cadenaInvertida));

/////////// PARTE 2/////////////

function removeFromArray(arreglo, item) {
    let indice = arreglo.indexOf(item);
    if (indice !== -1) {
        arreglo.splice(indice, 1);
    }
    return arreglo;
}

//resultado
let arreglo = prompt("Introduci un array de numeros (separado por comas):").split(",");
let item = prompt("Introduci el elemento a eliminar:");
mostrarResultado("Tu array ahora se ve así: " + removeFromArray(array, eliminarItem) + " , el elemento eliminado es: " + eliminarItem);

const books = [
    { title: "IT", author: "Stephen King" },
    { title: "El sapo Ruperto", author: "Roy Berocay" },
    { title: "Percy Jackson", author: "Rick Riordan" },
    { title: "El psicoanalista", author: "John Grisham" }
];

function getTheTitles(books) {
    let titulos = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i] && books[i].title) {
            titulos.push(books[i].title);
        }
    }
    return titulos;
}

//resultado
mostrarResultado("Los títulos de los libros son: " + getTheTitles(books).join(", "));

/////////// PARTE 3/////////////

function getOdds(nums) {
    let resultado = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 !== 0) {
            resultado.push(i);
        }
    }
    return resultado;
}

function duplicates(nums) {
    let resultado = 0;
    let repetidos = [];
    for (let i = 0; i < nums.length; i++) {
        if (repetidos.includes(nums[i])) {
            resultado += 1;
        } else {
            repetidos.push(nums[i]);
        }
    }
    return "La cantidad de repetidos es: " + resultado;
}

//resultados
let nums = prompt("Introduci un array de números para ver cuantos duplicados hay (separado por comas) :").split(",").map(Number);
mostrarResultado("Los números impares son: " + getOdds(nums));
mostrarResultado(duplicates(nums));


