//10! con while
let i = 1;
let max = 10;
var resultado = i;

while (i < max) {
    i++;
    resultado = resultado * i;
    console.log("El factorial de 10 es: " + resultado)
}