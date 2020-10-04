const mymodule = require('./mymodule');
const filePath = process.argv[2];
const ext = process.argv[3];

mymodule(filePath, ext, (err, data) => {
    if (err) {
        return console.log(err);
    } else {
        data.forEach(item => {
            console.log(item);
        });
    }
});