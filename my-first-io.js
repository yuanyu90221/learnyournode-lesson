const fs = require('fs');
const filePath = process.argv[2];
const printInputFile = (filePath) => {
   const contentBuffer = fs.readFileSync(filePath);
   const result = contentBuffer.toString().match(/\n/g).length;
   return result;
};

console.log(printInputFile(filePath));