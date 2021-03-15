const { valid } = require('@hapi/joi');
var express = require('express');
var router = express.Router();
const model = require('../../models/doctor');
const {get} = require('../../models/hospital');
const {validateCreate} = require('../../midlewares/doctor');

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
    res.redirect('/admin/doctor');
}

const getCreate = async(req,res) => {
    const nombres = await get();
    console.log(nombres);
    res.render('NuevoDoctor', {nombres});
}

const getUpdate = async(req,res) => {
    const id = req.params.id;
    const doc = await model.single(id);
    const nombre = doc[0].nombre;
    const fecha_de_nacimiento = doc[0].fecha_de_nacimiento;
    const sueldo = doc[0].sueldo;
    const id_hospital = doc[0].id_hospital;
    const nombreHospital = doc[0].nombreHospital;
    const nombres = await get(); 
    res.render('modificardoctor', {nombre, fecha_de_nacimiento, sueldo, id_hospital, nombreHospital, nombres});
}

const update = async(req,res) => {
    const id = req.params.id;
    const DocModificar = req.body;
    console.log(DocModificar);
    //const modificar = await model.update(id, DocModificar);
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
router.post('/create',validateCreate, create);
router.get('/create', getCreate);
router.get('/update/:id', getUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', borrar);
router.get('/disabled', allFalse);
router.get('/disabled/:id', habilitar);

module.exports = router;