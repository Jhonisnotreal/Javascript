//factorial break

var i = 1;
var dato = 10;
var resultado = 10;

while(i < dato){
    i++;
    resultado = resultado * i;
    console.log("10! = " + resultado)
    if (i > dato) {
        break;
    }
}