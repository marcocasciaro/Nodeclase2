const express = require('express');
const router = express.Router();
const { auth } = require('../models/usuarios');
const sha1 = require('sha1');

const get = (req, res) => {
    res.render('login');
}
const login = async(req, res) => {
    try{
    req.body.pass = sha1(req.body ["pass"]);
    var obj = req.body;
    var result = await auth(obj);
    if(result.length === 0){
        res.render('login');
    }
    const [{id, admin}] = result
    req.session.idUser = id;
    req.session.admin = admin;
    res.redirect('/admin/usuarios');
    }
    catch(e){
        console.log(e);
    }
}

router.get('/', get);
router.post('/', login);

module.exports = router;