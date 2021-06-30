const colors = require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquirerMenu,
        pausa,
        leerInput} = require('./helpers/inquirer')
//const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

console.clear()

const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if(tareasDB){
        //Cargar tareas
        tareas.cargarTareasFromArray( tareasDB )
        
    }
    //await pausa()

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
                tareas.listadoCompleto()
            break;
            case '3':
                //listar completadas
                tareas.listarPendientesCompletados(true)
            break;
            case '4':
                //listar pendientes 
                tareas.listarPendientesCompletados(false)
            break;
                
        }
        
        guardarDB( tareas.listadoArr)

        await pausa(); 
        
    } while (opt !== '0');

    //pausa(); 
}



main();