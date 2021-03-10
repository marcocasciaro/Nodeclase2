const express = require('express');
const router = express.Router();
const model = require('../models/usuarios');

const get = (req, res) => {
    res.render('login');
}
const login = async(req, res) => {
    console.log(req.body);
    const loginUser = req.body;
    const usuarios = await model.get(true);
    usuarios.forEach(usuario => {
        if(usuario.user == loginUser.user && usuario.pass == loginUser.pass){
            console.log("SESION INCIADA!");
            if(usuario.admin == 1){
                res.redirect('/doctor');
            }
            else{
                res.redirect('/');
            }
        }
    });
        console.log ("Usuario o contra incorrectas");
        res.redirect('/login');
}

router.get('/', get);
router.post('/', login);

module.exports = router;