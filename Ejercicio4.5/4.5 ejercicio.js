let nombre = "Juan"; //cadena de texto con mi nombre
let apellido = "Janett"; //cadena de texto con mi apellido
let estudiante = nombre + " " + apellido; //cadena de texto concatenando mi nombre y apellido con espacio
console.log(estudiante);

console.log(nombre.concat(" ", apellido));

//Cadena de texto con la cadena estudiante en mayusculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//Cadena de texto con la cadena estudiante en minusculas
let estudianteMinus =  estudiante.toLowerCase();
console.log(estudianteMinus)

//Cadena de texto que cuenta los caracteres en 'estudiante'
let estudianteLength = estudiante.length;
console.log(estudianteLength);

//variable con la primera letra del nombre
let primerLetraNombre = nombre[0];
console.log(primerLetraNombre);

//variable con la primera letra del apellido
let ultimaLetraApellido = apellido[5]
console.log(ultimaLetraApellido)

//Eliminar los espacios de 'estudiante'
let sinEspacios = estudiante.trim();
console.log(sinEspacios.length)

//Verificar si el nombre esta en la variable estudiante
let verificar = estudiante.includes(nombre)
console.log(verificar)
