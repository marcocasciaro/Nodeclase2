const fs = require('fs'); 
const {v4 : uuid} = require('uuid');
const allowExtension = ["png" , "jpg"];

const deleteTemp = (file) => fs.unlink(file, e => console.log(e));

const saveFile = ({mimetype, size, path}, extension, destFolder = './images') => {
    try{
        const [type, ext] = mimetype.split("/");
        if(!extension.includes(ext)){
            throw new Error("Formato incorrecto");
        }
        const uid = uuid();
        const fileName = `${uid}.${ext}`;
        const fileNameout = `${destFolder}/${fileName}`;
        fs.createReadStream(path).pipe(fs.createWriteStream(fileNameout));
        deleteTemp(path);
        return fileNameout;
    }
    catch(e){
        console.error(e);
        deleteTemp(path);
    }
}

const imgFile = (file) => saveFile(file, allowExtension);

module.exports = {imgFile};