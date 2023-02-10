let nombre = "Juan";
let apellido = "Janett";

const objeto = {
    nombre: "Juan",
    apellido: "Janett"
}

// localStorage.setItem(objeto, JSON.stringify({objeto }))
// console.log(JSON.parse(localStorage.getItem(objeto)))

// sessionStorage.setItem(objeto, JSON.stringify(objeto))
// console.log(JSON.parse(sessionStorage.getItem(objeto)))

document.cookie = "nombreCookie=JuanCookie"
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(-120000).toUTCString
console.log(document.cookie)