//7.6 Ejercicio 2
// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const objeto = {
    nombre: "Juan",
    apellido: "Janett",
    edad: 19,
    altura: 1.70,
    isDeveloper: false
}
// - Una variable que obtenga tu edad a partir del objeto anterior
const propiedad = "edad";
console.log(objeto[propiedad]);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaDatosPersonales = objeto;
console.log(listaDatosPersonales);

const objeto2 = [
    {nombre: "Adrian", apellido: "Galicia", edad: 23, estatura:1.74},
    {nombre: "Luis", apellido: "Gomez", edad: 21, estatura: 1.70}
]
console.log(objeto2)
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
objeto2.sort((a, b) => a.edad + b.edad)
console.log(objeto2)