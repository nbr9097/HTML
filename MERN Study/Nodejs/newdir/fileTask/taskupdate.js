const fs=require('fs')
fs.appendFile('task.txt','Adding more text to the file', function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log("file append succesfully");
});