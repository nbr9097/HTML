//import required package
const express = require('express');
const cookieParser = require('cookie-parser')
const app= express();
const port = 3000;
//use cookiparser to parse cookie
app.use(cookieParser());
//route to set a cookie
app.get('/setcookie', (req, res)=>{
    res.cookie('username','german');
    res.send('cookie has been set');

});
//route to read a cookie
app.get('/getcookie', (req, res)=>{
    let username = req.cookies['username'];
    if(username){
        res.send(`cookie retrieved:${username}`);
    }
    else{
        res.send('no cookie found');
    }
    
});
app.listen(port, () =>{
    console.log(`example app listening on port ${port}`)
})