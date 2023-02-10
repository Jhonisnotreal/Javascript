//7.7 Ejercicio-Fechas
// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fecha = new Date()
console.log(fecha)
// - La fecha de tu nacimiento
const fechaNacimiento = new Date(2002, 11, 17, 4, 4);
console.log(fechaNacimiento)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const temporalidad = fecha > fechaNacimiento
console.log(temporalidad)

// - Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento = fechaNacimiento.getFullYear()
console.log(anyoNacimiento)