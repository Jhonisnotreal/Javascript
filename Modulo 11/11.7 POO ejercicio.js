class Estudiante {
    nombre;
    
    obtenDatos(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = ['HTML', 'CSS', 'JAVASCRIPT'];    
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const estudiante = new Estudiante("Jhon")

estudiante.obtenDatos("Juan")
console.log(estudiante)