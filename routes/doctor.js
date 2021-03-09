var express = require('express');
var router = express.Router();
const model = require('./../models/doctor');

const all = async(req,res) =>{
    const doctor = await model.get();
    res.render('doctor', {doctor});
}

const single = async(req,res) => {
    const id = req.params.id;
    const doc = await model.single(id);
    res.render('doc', {doc});
}

const create = async(req,res) => {
    const obj = req.body;
    console.log(obj);
    const nuevoDoctor = await model.create(obj);
    res.redirect('/doctor');
}

const getCreate = (req,res) => {
    res.render('NuevoDoctor');
}

const getUpdate = async(req,res) => {
    const id = req.params.id;
    const doc = await model.single(id);
    res.render('modificardoctor', {doc});
}

const update = async(req,res) => {
    const id = req.params.id;
    const DocModificar = req.body;
    console.log(DocModificar);
    const modificar = await model.update(id, DocModificar);
    res.redirect('/doctor');
}



router.get('/', all);
router.get('/single/:id', single);
router.post('/create', create);
router.get('/create', getCreate);
router.get('/update/:id', getUpdate);
router.post('/update/:id', update);

module.exports = router;