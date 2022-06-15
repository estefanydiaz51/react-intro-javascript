

const persona = {
    nombre: 'Estefany',
    apellido: 'Diaz',
    edad: 26,
    direccion: {
        ciudad: 'Ipiales',
        zip: 889999,
        lat: 10.88823,
        lng: 99.21732
    }
}

// console.table( persona );

console.log( persona );
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );

console.log( persona2 );