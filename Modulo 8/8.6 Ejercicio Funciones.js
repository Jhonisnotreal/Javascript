//8.6 Ejercicio
// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
    if (true){
        console.log("Siempre doy true")
    } else {
        console.log("No doy true")
    }
    return siempreTrue
}

console.log(siempreTrue())

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function miAsincrona () {
    setTimeout(miAsincrona, 5000)
    console.log("Hola soy una promesa")
}

miAsincrona()

// - Una función generadora de índices pares automáticos
function* generaId() {
    let id = 0;
    while(true){
        id += 2
        if (id === 10){
            return id
        }
        yield id 
    }
}

const gen = generaId();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
