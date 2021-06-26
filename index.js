const colors = require('colors')
const { guardarDB } = require('./helpers/guardarArchivo')
const { inquirerMenu,
        pausa,
        leerInput} = require('./helpers/inquirer')
//const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

console.clear()

const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    do {
        opt = await inquirerMenu();
        //console.log({ opt })

        switch(opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:')
                tareas.crearTarea(desc)
                
            break;
            case '2':
                //listar tareas 
                console.log( tareas.listadoArr)
            break;

                
        }
        
        //guardarDB( tareas.listadoArr)

        await pausa(); 
        
    } while (opt !== '0');

    //pausa(); 
}



main();