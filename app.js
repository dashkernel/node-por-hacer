const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break
    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======================================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================================='.green);
        }
        break
    case 'actualizar':
        // console.log('Actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break
    default:
        console.log('Comando incorrecto');
}