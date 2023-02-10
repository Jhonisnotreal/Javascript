const logger = require('./logger/index2')

const miFuncion = valor => {
    if (typeof valor === "number") {
        return 2 * valor   
    }
}

const numero = "80";
try {
    const por2 = miFuncion(numero);
    console.log(por2)
} catch {
    console.error("ERROR!")
}

logger.error(miFuncion)