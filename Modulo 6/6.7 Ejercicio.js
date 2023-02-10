//Lista de compras
const listaCompras = ["Huevos", "Leche", "Jugo de naranja", "Bananas", "Chocolate en polvo"];

console.log(listaCompras);

//Agregando "Aceite de Girasol"

listaCompras.push("Aceite de Girasol");
console.log(listaCompras);

//Eliminando "Aceite de Girasol"
listaCompras.pop();
console.log(listaCompras)

//lista de 3 peliculas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculasFavoritas = [
    { titulo: "Inception", director: "Christopher Nolan", fecha: '2010-07-23'},
    { titulo: "Presagio", director: "Alex Proyas", fecha: '2009-03-20'},
    { titulo: "El lobo de Wall Street", director: "Martin Scorsese", fecha: '2014-01-10'}
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const pelisDate = peliculasFavoritas.filter(obj => {
    if (obj.fecha > '2010-01-01') {
        return true
    } else {
        return false
    }
})

console.log(pelisDate);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const director = peliculasFavoritas.map(peliculasFavoritas => peliculasFavoritas.director);
console.log(director);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaPelis = peliculasFavoritas.map(peliculasFavoritas => peliculasFavoritas.titulo);
console.log(listaPelis);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const director_titulo = director.concat(listaPelis);
console.log(director_titulo);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log([...director, ...listaPelis]);