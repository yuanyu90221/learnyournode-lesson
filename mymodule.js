const fs =  require('fs');
const path = require('path');
module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, data)=>{
        const list = [];
        if (err) {
            return callback(err)
        }
        data.forEach(file =>{
            if ( path.extname(file) ===`.${ext}` ){
                list.push(file);
            }
        });
        callback(null, list);
    });
}