

let a = 5;


if ( a >= 10 ) { // undefined, null, una asignación 
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}


// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes....

console.log({ dia });

if ( dia === 0 ) {
  console.log('Domingo');
} else if ( dia === 1 ) {
  console.log('Lunes');
} else if ( dia == 2) {
  console.log('Martes');
} else {
  console.log('No es lunes, martes o domingo');
}


