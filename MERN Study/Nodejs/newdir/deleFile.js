const fs=require('fs')
fs.unlink('dele.txt', function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('file deleted successfully!');
});