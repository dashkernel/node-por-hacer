const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea pendiente'
}

const argv = require('yargs')
    .command('crear', 'Agregar una tarea', { descripcion })
    .command('listar', 'Lista las tareas creadas')
    .command('actualizar', 'Actualiza el estado completado tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}