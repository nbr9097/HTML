//here writeFile function is used to write on output.txt file which is not created already
//output.txt file will created automatically
//here this is in asynchronys
const fs=require('fs')
fs.writeFile('output.txt','Good Morning friends', function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log("file written succesfully");
});