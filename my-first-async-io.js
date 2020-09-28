const fs = require('fs');
const filePath = process.argv[2];

const countFileLine = async (filePath) => {
    fs.readFile(filePath, {encoding: 'utf-8'}, (err, data)=>{
        if (err) {
            return console.log(err);
        }
        const result = data.match(/\n/g).length;
        console.log(result);
    });
};
countFileLine(filePath);