//estoy llamando a la función file system
const fs = require('fs');
//Creo colors por si lo quiero usar como un función
const colors = require('colors');

const crearArchivo = async( base = 3 , listar=false, hasta = 10) => {

    try{
        
        let salida, consola = '';
    
        for (let i = 1; i <= hasta; i++){
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
        }
    
        if(listar){
            console.log('============='.blue);
            console.log('Tabla del'.underline.yellow, colors.yellow( base ));
            console.log('============='.blue);

            console.log(consola);
        }
        
    
        //Igual que sale en la documentación
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            
        return `tabla-${base}.txt. creada`.rainbow;
    }catch (err){
        throw err;
    }
    

}

//para poder exportar

module.exports = {
    crearArchivo
}