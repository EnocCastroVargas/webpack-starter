

class Persona {
  
  nombre = '';
  codigo = '';
  frase  = '';
  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
    
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase  = frase;
  }

}



const spiderman = new Persona( 'Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );
console.log( spiderman );
console.log( ironman );


