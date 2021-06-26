const Tarea = require('./tarea')
/* 
_listado 
{  'uuid-123712-123123-2: {id:12, desc:contenido, completadoEn:fecha} }
*/

class Tareas {

    _listado = {};

    constructor(){
        this._listado = {}; 
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea( desc )
        this._listado[tarea.id] = tarea;
    }
}


module.exports = Tareas;