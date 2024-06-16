function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
// Al llamar a la función se imprimirá lo que esta en console.log e indicará un texto que dirá: "Nací en 1980" 


function myBirthYearFunc(EntradaAñoNacimiento){
        console.log("Nací en " + EntradaAñoNacimiento);
    }
// en este caso como la variable será "var EntradadaAñoNacimiento = 1980" el console.log imprimirá "Nací en 1980" igualmente


function add(num1, num2){
        console.log("¡Sumando números!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        console.log(sum);

    }

    //al llamar a la función lo que console.log imprimirá serán 4 resultados y son : "¡Sumando números!", num1 is: 10, num2 is: 20, 30.
    
    