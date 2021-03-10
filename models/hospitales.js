const pool = require("./../utils/bd");
const TABLA_HOSPITALES = "hospitales";
const T_HOSPITALES_IMAGENES = "hospitales_imagenes";

const get = async() => {
    const query = "SELECT h.*,  h_i.uid  FROM ?? as h JOIN ?? as h_i ON h.id = h_i.idHospital";
    const params = [TABLA_HOSPITALES, T_HOSPITALES_IMAGENES];
    const rows = await pool.query(query,params);
    return rows;
}

const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_HOSPITALES, obj];
    const rows = await pool.query(query,params);
    return rows;
}

const createImg = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [T_HOSPITALES_IMAGENES, obj];
    const rows = await pool.query(query,params);
    return rows;
}

module.exports = {get, create, createImg };