var express = require ('express');
var router = express.Router();
const correoModel = require('../models/correoModel');
// Una peticion muestra la pàgina contacto
// Un post que envie el correo

// funcion que muestra la vista de contacto
router.get('/', (req,res,next)=> {
    res.render('home');
});

// recibe los datos del formulario y envia un correo
router.post('/',async (req,res,next)=> {
    let objMsg = {

        nombre : req.body.nombre,
        correo: req.body.correo,
        comentario : req.body.comentario
    }
    // el id de la operacion se almacena en la variable respuesta
    let respuesta = await correoModel.main(objMsg);
    // CANNOT SET HEADERS AFTER THEY ARE SENT
    if(respuesta) {

        res.render('home', {status : true,message : 'Correo enviado, en breve nos contactaremos'})
    } else {
        res.render('home', {status : false,message : 'No se pudo enviar el correo , intente de nuevo màs tarde'})
    }
})

module.exports = router;