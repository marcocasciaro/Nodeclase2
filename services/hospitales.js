const {create, createImg} = require ('./../models/hospitales');
const {imgFile} = require('./../utils/fileHandler');

const createHospital = async(body, file) => {
    try{
        const {insertId : idHospital} = await create(body);
        const uid = imgFile(file);
        console.log(uid);
        const obj = {idHospital, uid};
        const {insertId : idFile} = await createImg(obj);
        return idFile;
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {createHospital};