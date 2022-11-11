

class Persona {
  nombre = '';
  codigo = '';
  frase  = '';
  comida = '';

  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
    
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase  = frase;
  }

  set setComidaFavorita( comida ) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida de favorita de ${ this.nombre} es ${ this.comida }`;
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
// console.log( ironman );

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';


console.log( spiderman.getComidaFavorita );

console.log( spiderman );