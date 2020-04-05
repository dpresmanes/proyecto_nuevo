var express = require('express');
var router = express.Router();
// deteccion de verbos http (get)
// definicion de subrutas
const registroModels = require('../models/registroModels');
const md5 = require('md5')
// get , post ,put , delete
router.get('/',(req,res,next)=> {
    res.render('login');
});
router.post('/',async(req,res,next)=>{

    if(req.body.password != "" && req.body.usuario !=""){
        let result = await registroModels.authUser(req.body.usuario,md5(req.body.password));
        console.log (result)
        // result : []
        if(result.length > 0) {
            console.log(result)
            let id = result[0].id_registro;
            let permisos = result[0].permisos;
            // crear la sesion
            // creo una variable superglobal llamada usuario que almacena el id del usuario de la consulta en el model
            if(permisos == 1){
                console.log("ey, ingresaste y sos admin")
                req.session.admin = id;
                res.redirect('/admin');
            } else {
                console.log("sos un usuario comun pero animo, te queremos :D")
                req.session.usuario = id;
                res.redirect('/turno');
            }
        } else {
            res.render('login',{message:"Usuario o password incorrectos"})

        }

    }
    else{
        res.render('login',{message:"los datos no son correctos"})
    }

})
module.exports = router;