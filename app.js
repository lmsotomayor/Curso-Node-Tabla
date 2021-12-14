
//uso desestructuracion para traer solo la funcion crearArchivo
const { crearArchivo} = require('./helpers/multiplicar');
const argv = require ('./config/yargs');

//ahora envio el argv con el l
crearArchivo( argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));

