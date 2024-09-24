//asynchronus read function example
//here call back function is used
const fs=require('fs')
fs.readFile('input.txt', function(err,data){
    if(err){
        console.error(err);
        return;
    }
    console.log(data.toString());
});
