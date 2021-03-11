const express = require('express');
const router = express.Router();
const model = require('../../models/usuarios');
const sha1 = require('sha1');

const get = async(req,res) => {
    const usuarios = await model.get(true);
    res.render('usuarios', {usuarios});
}
const convert = async(req,res) => {
    const id = req.params.id;
    const user = await model.single(id);
    var admin = 0;
    user.forEach(usuario => {
    if(usuario.admin == 0){
        admin = 1;
    }
    });
    const convertir = await model.convert(admin, id);
    res.redirect('/admin/usuarios');
}

const create = async(req,res) =>{
    req.body.pass = sha1(req.body.pass);
    const obj = req.body;
    var newUser = await model.create(obj);
    res.render('crearUsuario')
}




router.get('/', get);
router.get('/convert/:id', convert);
router.get('/create', (req,res) => res.render('crearUsuario'));
router.post('/create', create);



module.exports = router;