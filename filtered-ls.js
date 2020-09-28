const fs =  require('fs');
const path = require('path');
const filePath = process.argv[2];
const ext = process.argv[3];
const listFiles = async (filePath, ext) => {
    fs.readdir(filePath, (err, list)=>{
        if (err) {
            return console.log(err);
        }
        list.forEach(file =>{
            if ( path.extname(file) ===`.${ext}` ){
                console.log(file);
            }
        })
    });
}
listFiles(filePath,ext)