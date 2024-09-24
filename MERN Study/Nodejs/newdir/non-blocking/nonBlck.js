const fs=require('fs')
fs.writeFile('nonBlk.txt','pooda mandammare', function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log("file written succesfully");
});
console.log('file reading initiated');