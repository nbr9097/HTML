//appendFie is used to add  into a file
const fs=require('fs')
fs.appendFile('update.txt','pooda mandammare', function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log("file append succesfully");
});