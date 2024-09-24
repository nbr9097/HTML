const fs=require('fs')
fs.writeFile('task.txt','this is a sample task for file operations using node.js', function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log("file written succesfully");
});