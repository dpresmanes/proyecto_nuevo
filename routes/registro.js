var express = require ('express');
var router = express. Router();
const registroModels = require('../models/registroModels')
const md5 = require('md5');


router.get('/',(req,res,next)=>{  

    res.render ('registro');

})

router.post('/', async (req,res,next)=> {


    let objUsr = {
        col_email : req.body.email,
        col_nombre : req.body.nombre,
        col_apellido: req.body.apellido,
        col_tel : req.body.telefono,
        col_pass : md5(req.body.pass)
        
       
    }
        
    let result = await registroModels.createUser(objUsr); 
    
    if(result){
       res.render('login', {status : true, message: 'Registro exitoso'});
       
   } else {
        res.render('registro', {status : false,message : 'Error'}); 
    }
})

module.exports = router;
