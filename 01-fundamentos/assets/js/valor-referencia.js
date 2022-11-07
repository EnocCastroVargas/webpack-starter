// Valores primitivos, se pasa por valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Los objetos, se pasa por referencia
let juan = { nombre: 'Juan' };
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiarNombre = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );

console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice'); // se utiliza para medir el rendimiento en JavaScript
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
