const express=require('express')
const session=require('express-session')
const app=express()
const PORT=3000

//use express session for managing sessions
app.use(session({
    secret:'mysecretkey', //A secret key for signing the session ID cookie
    resave: false,
    saveUninitialized:true,
    cookie:{secure:false} //for local testing, use secure: false
}));

//route to set a session variable
app.get('/setsession',(req,res)=>{
    req.session.user='German';
    res.send('Session has beenset');
});

//route to retrieve sesssion data
app.get('/getsession',(req,res)=>{
    if(req.session.user){
        res.send(`Session user: ${req.session.user}`)
    }
    else{
        res.send('No session found')
    }
})

//route to destroy session
app.get('/destroysession',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.send('Error destroying session')
        }
        res.send('Session destroyed')
    })
})

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
})