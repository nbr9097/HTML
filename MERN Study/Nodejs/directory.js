//directory is used to create a newfile
//here file name is newdir
const fs=require('fs');
fs.mkdir('newdir',function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('Directory created successfully!')
});