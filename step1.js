const fs = require('fs');
const process = require('process');

function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if (err) {
            console.log(`Error reading ${path}: ${err}`);
            process.exit(4)
        }else{
            console.log(data);
        }
    });
}
cat(process.argv[2]);