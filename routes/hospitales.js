var express = require('express');
var router = express.Router();
const multer = require ('multer');
const config = {dest : `./public/tmp`};
const upload = multer(config);
const model = require('./../models/hospitales');
const service = require ('./../services/hospitales');

const all = async(req,res) =>{
    const hospitales = await model.get();
    res.render('hospitales', {hospitales});
}

const create = async (req, res) => {
    const idFile = await service.createHospital(req.body, req.file);
    res.redirect('/hospitales');
}


router.get('/', all);
router.get('/create', (req,res) => res.render ("crearHospital"));
router.post('/create', upload.single("imagen"), create);

module.exports = router;