const http = require('http');
const  bl = require('bl');
const urls = process.argv.slice(2);
const results = [];
let count = 0;
function printResult () {
    for (let i =0; i < results.length; i++) {
        console.log(results[i]);
    }
}
const httpGet =  function(uri, idx) {
    http.get(uri, function(res){
      res.pipe(bl(function(err, data){
        if (err) {
            return console.error(err);
        }
        results[idx] = data.toString();
        count++;
        if (count == 3) {
            printResult();
        }
      }));
    });
};
for (let idx = 0; idx < urls.length; idx++) {
    httpGet(urls[idx], idx);
}