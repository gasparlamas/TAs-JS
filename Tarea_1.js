
/////////// PARTE 1/////////////

function repeatString(texto,repeticiones){
    let resultado = "";
    for (let i=0; i < repeticiones; i++){
        resultado+= texto;
    }
    return resultado
}
console.log(repeatString("hola", 3));

function reverseString(texto){
    let resultado = "";
    for (let i = texto.length -1; i >= 0; i--){
        resultado+= texto[i];
    }
    return resultado;
}
console.log(reverseString("cuadernola"));

/////////// PARTE 2/////////////

function removeFromArray(arreglo,item){
    let indice = arreglo.indexOf(item);
    if (indice !==-1){
        arreglo.splice(indice,1);
    }
    return arreglo;
}
console.log(removeFromArray(["Enero","Abril","Junio","Marzo","Diciembre"],"Junio"));

const books = [
    {
      title: "IT",
      author: "Stephen King"
    },
    {
      title: "El sapo Ruperto",
      author: "Roy Berocay"
    },
    {
        title: "Percy Jackson",
        author: "Rick Riordan"
    },
    {
        title: "El psicoanalista",
        author: "John Grisham"
    }
  ]

function getTheTitles(books){
    let titulos = [];
    for(let i = 0; i<books.length; i++){
        if (books[i] && books[i].title) {
            titulos.push(books[i].title);
        }
    }
    return titulos;
}
console.log(getTheTitles(books));

  


/////////// PARTE 3/////////////

function getOdds(nums){
    let resultado = [];
    for (let i= 0; i < nums.length; i++){
        if (i%2 !== 0){
            resultado.push(i);
        }
    }
    return resultado;
}
console.log(getOdds([1,2,3,4,5,6,7,8,9,10]));

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
    return "la cantidad de repetidos es: " + resultado
}
console.log(duplicates([1,2,2,3,3,4,4,5]));