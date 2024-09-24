const fs=require('fs')
fs.unlink('task.txt', function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('file deleted successfully!');
});