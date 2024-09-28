const express=require('express')
const session=require('express-session')
const app=express()
const path = require('path')
app.use(express.urlencoded())
const PORT=3000

//use express session for managing sessions
app.use(session({
    secret:'mysecretkey', //A secret key for signing the session ID cookie
    resave: false,
    saveUninitialized:true,
    cookie:{secure:false} //for local testing, use secure: false
}));
app.post('/login',(req, res)=>{
    const {username, password }=req.body;
if(username === 'admin' && password ==='admin')
{
    req.session.isLoggedIn = true;
    res.redirect('/dashboard');
}
else{
    res.send('invalid credentials.please try again');
}
}
);
app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
        } else {
            res.clearCookie('role');
            res.send('You are now logged Out!');
        }
    });
});
app.get('/dashboard', (req,res) => {
    if(req.session.isLoggedIn) {
        res.send('Hi Admin!! Welcome to the dashboard');
    } else {
        res.send('Acces denied. Please login first');
    }
});

app.get('/setcookie',(req,res) => {
    res.cookie('role','admin', {maxAge: 900000, httpOnly: true});
    res.send('Cookie has been set!');
});
app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'sighin.html'))
})
app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
})