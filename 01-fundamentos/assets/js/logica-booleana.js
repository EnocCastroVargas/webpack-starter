
const regresaTrue = () => {
  console.log('Regresa true');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
}


console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false 
console.log( !false ); // true 

console.log( !regresaFalse() ); // false

console.warn('And'); // regresa true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // true

console.log('===========================');
console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false

console.log('========== && ===========');
regresaFalse() && regresaTrue();

console.log( '4 condiciones ', true && true && true && false ); // false

console.warn('OR'); // regresa true si al menos una condición tiene que ser true
console.log( true || false ); // true
console.log( false || false ); // false

console.log( regresaTrue() || regresaFalse() ); // true
console.log( regresaFalse() || regresaTrue() ); // true
console.log( '4 condiciones ', true || true || true || false ); // true


console.warn('Asignaciones ');