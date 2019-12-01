//eN ESTE CASO RENDER TOMA DOS PARAMETROS LA VISTA Y LAS OPCIONES
exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos UpTask'
    })
};

//Nuevo proyecto
exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
};

//Enviar datos del Formulario 
exports.nuevoProyecto = (req, res) => {
    //enviar a la consola lo que el usuario escriba
    //console.log(req.body)
    //validar que tengamos algo en el input
    const { nombre } = req.body

    let errores = [];
    //validando
    if (!nombre) {
        errores.push({ 'texto': 'Agrega un nombre al proyecto' })
    }
    //si ahi errores 
    if (errores.length > 0) {
        res.render('nuevoProyecto',
            errores

        )
    }
}