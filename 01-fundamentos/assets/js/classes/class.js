

class Persona {
  
  nombre = '';
  codigo = '';
  frase  = '';
  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
    
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase  = frase;
  }

  quienSoy() {
    console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${ this.codigo } dice: ${ this.frase }`)
  }

}



const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );
console.log( spiderman );
console.log( ironman );

spiderman.miFrase();
ironman.miFrase();


