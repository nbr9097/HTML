//import required packages
const express =require('express');
const cookieParser=require('cookie-parser');

const app1=express();
const port=3000;

//USE cookie-Parser to parse cookies
app1.use(cookieParser());

//Route to set a cookie

app1.get('/setcookie',(req,res)=>{
    res.cookie('username','German');
    res.send('Cookie has been setl');
});

//Route to read a cookie
app1.get('/getcookie',(req,res)=>{
    let username=req.cookies['username'];
    if(username){
        res.send(`cookie retrived:${username}`);
    }
    else{
        res.send('no cookie found');
    }
});

app1.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})