const argv = require('yargs')

        //La abreviatura b hace referencia a base
        .option('b',{
            alias : 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .check( (argv, options) => {
            if (isNaN (argv.b) ) {
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicar'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Indico hasta donde llega la tabla'
        })


        .argv;

//Para exportarlo
module.exports = argv;