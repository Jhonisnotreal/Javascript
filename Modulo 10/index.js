import { suma, multiplica } from './modulos/controller.js'
import chalk from 'chalk';

const sum = suma(4,5)
const multiplicacion = multiplica(1,2)

console.log(sum);
console.log(chalk.green(multiplicacion));