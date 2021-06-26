const colors = require('colors')
const { inquirerMenu,
        pausa,
        leerInput} = require('./helpers/inquirer')
//const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

console.clear()

const main = async () => {

    console.log('Hola Mundo')

    let opt = ''
    const tareas = new Tareas()

    do {
        opt = await inquirerMenu();
        console.log({ opt })

        switch(opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:')
                tareas.crearTarea(desc)
                
            break;
            case '2':
                //listar tareas 
                console.log( tareas._listado )
            break;

                
        }
        // const tarea = new Tarea ('Comer Asadito')
        // tareas._listado[tarea.id] = tarea
        // console.log(tareas)

        await pausa(); 
        
    } while (opt !== '0');

    //pausa(); 
}



main();