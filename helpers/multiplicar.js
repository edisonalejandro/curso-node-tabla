const fs = require('fs');



const crearArchivo = ( base = 5, listar = false, hasta = 12) => {
    

    return new Promise(  (resolve, reject ) => {

        
    
        let salida = '';
    
        for ( let step = 1 ; step <= hasta; step++){ 
            salida += (`${base} X ${step} = ${base * step}\n`);
        }

        if( listar ){
            console.log('===========================');
            console.log(`       Tabla del: ${ base }`);
            console.log('===========================');
            console.log(salida);
        }
        

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        
        resolve( `tabla-${ base }.txt` );
        reject(`Archivo no pudo ser creado`);
    

    })



}

 module.exports = {
    crearArchivo
 }