const pool = require("./../utils/bd"); 
T_HOSPITAL = "hospitales";


const get = async() => {
    const query = "SELECT h.id, h.nombre FROM ?? AS h";
    const params = [T_HOSPITAL];
    return await pool.query(query, params);
}

module.exports = {get};