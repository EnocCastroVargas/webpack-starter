class Persona {

  static porObjeto({ nombre, apellido, pais }) {
    return new Persona( nombre, apellido, pais );
  }

  constructor( nombre, apellido, pais ) {
    this.nombre   = nombre;
    this.apellido = apellido;
    this.pais     = pais;
  }

  getInfo() {
    console.log(`Info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
  }
}
  
const nombre1   = 'Enoc',
      apellido1 = 'Castro',
      pais1     = 'Costa Rica';

const alisson = {
  nombre  : 'Alisson',
  apellido: 'Rodríguez',
  pais    : 'Costa Rica'
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( alisson );


persona1.getInfo();
persona2.getInfo();





