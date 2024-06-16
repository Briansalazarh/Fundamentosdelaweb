function hello_world() {
    console.log("Hello World");
    console.log("¿Cómo estás?");
}

hello_world();

function hola_mundo(nombre) { //nombre = "Elena";
    console.log("Hola "+nombre); //IMPRIMIR "Hola Elena"
}

hola_mundo("Elena");

function multiplicar(num1, num2) { //num1 = 2, num2 = 3
    var total = num1 * num2; //total = 2 * 3 = 6
    return total;
}

var totalMultiplicacion = multiplicar(2, 3); //totalMultiplicacion = 6
console.log(totalMultiplicacion);