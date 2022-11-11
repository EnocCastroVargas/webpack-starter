
const enoc = {
  nombre: 'Enoc',
  edad: 21,
  imprimir() {
    console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
  }
};

const pedro = {
  nombre: 'Pedro',
  edad: 15,
  imprimir() {
    console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
  }
};


// enoc.imprimir();
//* Esto se debe crear con la palabra new
function Persona(nombre, edad) {
  console.log('Se ejecuto esta linea');
  
  this.nombre = nombre;
  this.edad = edad;
  
  this.imprimir = function() {
    console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
  };
  
}

const maria = new Persona('Maria', 18);
const alisson = new Persona('Alisson', 19);
// console.log( maria );
maria.imprimir();
alisson.imprimir();







