
/////////// PARTE 1/////////////

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
console.log(generatePassword(10));



/////////// PARTE 2/////////////

const edades = [
    {
      nombre: "Esteban",
      edad: 28
    },
    {
      nombre: "Luana",
      edad: 20
    },
    {
      nombre: "Hasbulla",
      edad: 45 
    },
    {
      nombre: "Leo",
      edad: 69
    }
  ]

function findTheOldest(personas){
    let edadMayor = 0;
    let resultado = ""
    for(let i = 0; i<=personas.length;i++){
        if (personas[i] && personas[i].edad) {
            if(personas[i].edad > edadMayor){
                edadMayor = personas[i].edad;
                resultado = personas[i].nombre
            }
        }
    }
    return "La persona de mayor edad es: " + resultado
}
console.log(findTheOldest(edades));




