
/////////// PARTE 1/////////////

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
console.log(sumAll(1,4));

/////////// PARTE 2/////////////

function convertToCelsius(temp){
    let resultado = (temp-32) * (5/9);
    return "La conversion a Celsius es: " +  resultado.toFixed(1);
}
console.log(convertToCelsius(60));


function convertToFarenheit(temp){
    let resultado = (temp*(9/5)) + 32;
    return "La conversion a Farenheit es: " +  resultado.toFixed(1);
}
console.log(convertToFarenheit(66));


/////////// PARTE 3/////////////

function leapYears(año){
    let resultado = false;
    if(año%4 === 0){
        if(año%100!==0 || año%400===0){
        resultado = true;
        }
    }
    return resultado;
}
console.log(leapYears(2024));
console.log(leapYears(1923));

/////////// PARTE 4/////////////

function getSums(nums){
    let resultado = 0;
    for(let i=0; i<= nums.length -1; i++){
        resultado+= nums[i];
    }
    return resultado;
}
console.log(getSums([1,2,3,4,5]));

