

// const getImagenPromesa = () => new Promise ( resolve => resolve('http://dajsdsajd.com'));
const getImagen = async () => {
    try{
        const apiKey = 'ZmpPlvkSIzyPtVx9dlmwmeCqux0Hh7Ky';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement( 'img' );
        img.src = url;
        document.body.append( img );
    } catch( err ) {
        console.error( err );
    }
}

getImagen();