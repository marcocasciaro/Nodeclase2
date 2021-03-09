const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localHost' ,
    port: process.env.DB_PORT || 3306 ,
    password: process.env.DB_PASSWORD ||'' ,
    user: process.env.DB_USER || 'root',
    database: process.env.DB_DATABASE || 'salud' ,
    connectionLimit: 10

});

pool.query = util.promisify(pool.query)



module.exports = pool;