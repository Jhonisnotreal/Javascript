//String (cadenas de caracteres)
let str = 'Hola soy un texto con comillas simples'; //eslint-disable-line
let str_dbl = "Hola soy un texto con comillas dobles"

console.log(str)
console.log(str_dbl)

let str_comillas = "El otro dia me dijo literalmente que me \"amaba\" "
//Usa las barras  \ o haz esto:
let str_comillas_simple = "El otro dia me dijo literalmente que me \"amaba\" "
let str_comillas_dobles = "El otro dia me dijo literalmente que me 'amaba' "
let str_comillas_simples_2 = "El otro dia me dijo literalmente que me 'amaba' "


console.log(str_comillas)
console.log(str_comillas_simple)
console.log(str_comillas_dobles)
console.log(str_comillas_simples_2)

//Asi se hacen strings estaticos

///////////Comillas invertidas (backticks)

let otr_str = "Hola, esto es un string con backticks"

console.log(otr_str)

let nombre = "Chanchito" //ahora con la let dentro del saludo puedes modificar lo cuanto quieras
let saludo = `Hola, ${nombre} bienvenido`
//la ventaja de las backticks ` ` es que permiten meter variables dentro del texto
console.log(saludo)

//las ` ` suelen usarse como plantillas HTML
let plantilla = `
<html>
    <h1>Titulo Mamalon, pag web de ${nombre}</h1>
    <p>Parrafo mamalon</p>
</html>`

console.log(plantilla)

//las ` ` permiten saltos de linea en la declaracion del string 

////// Intro de variables en HTML
let libros = ["El psicoanalista", "El lobo de wall street", "El señor de las moscas"]

