const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Este argumento es la base a multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Este argumento permite listar la tabla de multiplicar'
                    })
                    .check( (argv, options) => {
                        if( isNaN( argv.b ) ){
                            throw 'La base tiene que ser un número';
                        }
                        return true;
                    }) 
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 12,
                        describe: 'Este argumento indica hasta que numero multiplicar'
                    })
                    .argv;

module.exports = argv;