//7.5 Ejercicio 1
// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const lista = ["Ivan", "Ana", "Joan", "Carlo", "Sofia"]
const set = new Set(lista);

console.log(set)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
set.add("Juan");
console.log(set)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
set.add("Javascript");
console.log(set)