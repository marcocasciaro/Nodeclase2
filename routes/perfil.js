var express = require('express');
var router = express.Router();
const model = require('./../models/usuarios');


router.get('/', async(req,res) => {
    const usuario = await model.single(req.session.idUser);
    const [{user, pass}] = usuario ;
    res.render("miPerfil", {user, pass});
})



module.exports = router;