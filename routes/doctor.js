var express = require('express');
var router = express.Router();
const model = require('./../models/doctor');

const all = async(req,res) =>{
    var status = true;
    const doctor = await model.get(status);
    res.render('doctor', {doctor, status});
}

const allFalse = async(req,res) =>{
    var status = false;
    const doctor = await model.get(status);
    res.render('doctor', {doctor, status});
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

const borrar = async(req,res) => {
    const status = false;
    const id = req.params.id;
    const borrado = await model.borrar(id, status);
    res.redirect('/doctor');
} 

const habilitar = async(req,res) => {
    const status = true;
    const id = req.params.id;
    const borrado = await model.borrar(id, status);
    res.redirect('/doctor');
} 




router.get('/', all);
router.get('/single/:id', single);
router.post('/create', create);
router.get('/create', getCreate);
router.get('/update/:id', getUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', borrar);
router.get('/disabled', allFalse);
router.get('/disabled/:id', habilitar);

module.exports = router;