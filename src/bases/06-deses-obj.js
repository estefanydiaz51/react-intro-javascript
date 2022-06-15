// Desestructuración
// Asignación desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado'
}


const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.93120390213,
            lng: -12.92324234
        }
    }
}
// const avenger = retornaPersona( persona );
// console.log( avenger );

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona( persona );
console.log( nombreClave, anios );
console.log( lat, lng );