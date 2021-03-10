const pool = require("./../utils/bd");
const TABLA_DOCTOR = "doctor";
const TABLA_HOSPITALES = "hospitales";

const get = async(habilitado) => {
    const query = "SELECT d.id, d.nombre, d.fecha_de_nacimiento, d.sueldo,  h.nombre as nombreH FROM ?? as d JOIN ?? as h ON d.id_hospital = h.id WHERE d.habilitado = ?";
    const params = [TABLA_DOCTOR, TABLA_HOSPITALES, habilitado];
    const rows = await pool.query(query,params);
    return rows;
}

const single = async(id) => {
    const query = 'SELECT d.*, h.nombre as nombreH FROM ?? as d JOIN ?? as h ON d.id_hospital = h.id WHERE d.id = ? AND d.habilitado = true';
    const params = [TABLA_DOCTOR, TABLA_HOSPITALES, id];
    const rows = await pool.query(query, params);
    console.log(rows);
    return rows;
}

const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_DOCTOR, obj];
    const rows = await pool.query(query,params);
    return rows;
}

const update = async(id, obj) => {
    const query = 'UPDATE ?? AS d SET ? WHERE d.id = ?';
    const params = [TABLA_DOCTOR, obj, id];
    const rows = await pool.query(query,params);
    return rows;
}

const borrar = async(id, habilitado) =>{
    const query = 'UPDATE ?? AS d SET habilitado = ? WHERE d.id = ?';
    const params = [TABLA_DOCTOR, habilitado, id];
    return await pool.query(query,params);
}








module.exports = {get, single, create, update, borrar};