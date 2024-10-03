const express=require('express')
const path=require('path')  //get directory path
const app=express()
const bodyParser=require('body-parser');
app.use(express.static('public'))

//set 'views' directory for any view being rendered
app.set('views',path.join(__dirname,'views'));

//set pug as the view engine
app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended:true}));


//define a route to render the template
app.get('/',(req,res)=>{
    items=['Item 1','Item 2','Item 3']
    res.render('index',{title:'Express & Pug Tutorial', message:'Welcome to the Pug Template Engine!'});
});

app.get('/layout',(req,res)=>{
    items=['Item 1','Item 2','Item 3']
    res.render('layout_ex',{title:'Express & Pug Tutorial', message:'Welcome to the Pug Template Engine!'});
});
app.get('/form',(req,res)=>{
    items=['Item 1','Item 2','Item 3']
    res.render('form',{title:'Express & Pug Tutorial', message:'Welcome to the Pug Template Engine!'});
});
app.post('/submit',(req,res)=>{
    const{ name, email, gender}=req.body;
    res.render('result',{title:'Form Submitted', name, email,gender});
})
//start the server
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});