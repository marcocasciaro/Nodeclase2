const pool = require("./../utils/bd"); 
const TABLA_USUARIOS = "usuarios"

const get = async(habilitado) => {
    const query = "SELECT id, user, pass, admin FROM ?? WHERE habilitado = ?";
    const params = [TABLA_USUARIOS, habilitado];
    return await pool.query(query, params);
}
const single = async(id) => {
    const query ="SELECT id, user, pass, admin FROM ?? WHERE id = ?";
    const params= [TABLA_USUARIOS, id];
    return await pool.query(query, params);
}
const convert = async(admin, id) => {
    const query = "UPDATE ?? SET admin = ? WHERE id = ?";
    const params = [TABLA_USUARIOS, admin, id];
    return await pool.query(query, params);
}

module.exports = {get, single, convert};